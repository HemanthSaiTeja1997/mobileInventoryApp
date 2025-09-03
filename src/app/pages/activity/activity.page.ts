import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSpinner, IonIcon, IonButton } from '@ionic/angular/standalone';
import { GetApiResponseService } from 'src/app/services/fetchApiRespone/get-api-response-service';
import { MasterApiService } from 'src/app/services/masterapi/master-api-service';
import { ConfigApiService } from 'src/app/services/configapi/config-api-service';
import { TransactionalApiService } from 'src/app/services/transactionalapi/transactional-api-service';
import { ApiListType, ResponseApiType } from 'src/app/interfaces/getApiResponse';
import { ApiStatus } from 'src/app/utils/constants';
import { checkmarkCircle } from 'ionicons/icons';
import { ApiList } from 'src/app/services/apiList/api-list';
import { Apiservice } from 'src/app/services/apiservice/apiservice';
import { Sqliteservice } from 'src/app/services/sqlite/sqliteservice';
import { addIcons } from 'ionicons';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
  standalone: true,
  imports: [IonContent, IonIcon, CommonModule, FormsModule, IonButton]
})

export class ActivityPage implements OnInit {
  responsibility = localStorage.getItem('responsibility');
  listOfApiToCall: ApiListType[] = [];
  dummyList: ApiListType[] = [];

  listOfFailedApiToCall: ApiListType[] = [];

  apiresult: ResponseApiType[] = [];
  failedApis: ResponseApiType[] = [];

  loadingMap: { [tableName: string]: boolean } = {};

  constructor(private sqlite: Sqliteservice, private navCltr: NavController, private apilist: ApiList, private fetchApiRespone: GetApiResponseService, private materApi: MasterApiService, private configApi: ConfigApiService, private transationalApi: TransactionalApiService) {
    addIcons({
      checkmarkCircle
    })
  }

  async ngOnInit() {
  this.listOfApiToCall =  this.apilist.getListOfApisBasedOnResponsibility(this.responsibility!);
  console.log("listOfApiToCall ",this.listOfApiToCall);
  
    // this.listOfApiToCall = [
    //   ...this.materApi.getMasterApiList(),
    //   ...this.configApi.getConfigApiList(),
    //   ...this.transationalApi.getTransactionalApiList()
    // ];
    await this.callAllApis(this.listOfApiToCall);
    this.fetchAllTables();
  }

  async callAllApis(listOfApi: ApiListType[]): Promise<ResponseApiType[]> {
    this.apiresult = [];
    this.loadingMap = {};
    const apiresponse = listOfApi.map(async (apiData) => {
      const tableName = apiData.tableName;
      this.loadingMap[tableName] = true;
      try {
        const res = await this.fetchApiRespone.getResponse(apiData);
        console.log("ress...", res);
        return {
          ...res
        };
      } catch (error) {
        return {
          tableName: apiData.tableName,
          Status: 500,
          apiStatus: 'FAILED',
          message: `Failed to fetch ${apiData.apiName}`,
          apiType: apiData.apiType
        };
      } finally {
        setTimeout(() => {
          this.loadingMap[tableName] = false;
        }, 2000);
      }
    });

    this.apiresult = await Promise.all(apiresponse);
    this.failedApis = this.apiresult.filter(api => {
      if (api.apiType === 'master' || api.apiType === 'config') {
        return api.Status !== 200;
      }
      else if (api.apiType === 'transactional') {
        return !(api.Status === 200 || api.Status === 204)
      }
      return true;
    });
    console.log("allApiRespone", this.apiresult);
    if (this.failedApis.length === 0) {
      setTimeout(()=>{
        this.navCltr.navigateForward('dashboard')
      },3000)
    }
    return this.apiresult;

  }


  async syncData(): Promise<void> {
    this.listOfFailedApiToCall = this.apilist.apiList.filter(api =>
      this.failedApis.some(failed => failed.tableName === api.tableName)
    )
    const retriedResponses = await this.callAllApis(this.listOfFailedApiToCall);
    console.log("retriedResponses", retriedResponses);

    console.log("apires>>>>>", this.apiresult);
  }


  async fetchAllTables(): Promise<void> {
    const listOfTablenames = this.apilist.getTableData();

    for (const tableName of listOfTablenames) {
      const data = await this.sqlite.selectAllFromTable(tableName);
      console.log(`${tableName}:`, data);
    }
  }


}

