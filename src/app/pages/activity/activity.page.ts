import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonSpinner ,IonIcon} from '@ionic/angular/standalone';
import { GetApiResponseService } from 'src/app/services/fetchApiRespone/get-api-response-service';
import { MasterApiService } from 'src/app/services/masterapi/master-api-service';
import { ConfigApiService } from 'src/app/services/configapi/config-api-service';
import { TransactionalApiService } from 'src/app/services/transactionalapi/transactional-api-service';
import { ApiListType, ResponseApiType } from 'src/app/interfaces/getApiResponse';
import { ApiStatus } from 'src/app/utils/constants';
import {  checkmarkCircle } from 'ionicons/icons';
import { ApiList } from 'src/app/services/apiList/api-list';
import { Apiservice } from 'src/app/services/apiservice/apiservice';
import { Sqliteservice } from 'src/app/services/sqlite/sqliteservice';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle,IonIcon, IonToolbar,IonSpinner, CommonModule, FormsModule]
})

export class ActivityPage implements OnInit {
  listOfApiToCall: ApiListType[] = [];
  apiresult: ResponseApiType[] = [];
  loadingMap: { [tableName: string]: boolean } = {};

  constructor(private sqlite:Sqliteservice,private apilist:ApiList,private fetchApiRespone: GetApiResponseService, private materApi: MasterApiService, private configApi: ConfigApiService, private transationalApi: TransactionalApiService) { 
    addIcons({
      checkmarkCircle
    })
  }

async  ngOnInit() {
    this.listOfApiToCall = [
      ...this.materApi.getMasterApiList(),
      ...this.configApi.getConfigApiList(),
      ...this.transationalApi.getTransactionalApiList()
    ];
  await  this.callAllApis(this.listOfApiToCall);
  this.fetchAllTables();
  // this.getItemsdata=await this.sqlite.selectAllFromTable('Items');
  // console.log("items>>>",this.getItemsdata);
  


  }

  // async callAllApis(listOfApi: ApiListType[]) {
  //   this.apiresult = [];
  //   const apiresponse = listOfApi.map(apiData => this.fetchApiRespone.getResponse(apiData));
  //   const results = await Promise.allSettled(apiresponse);
  //   this.apiresult = results.map((res, index) => {
  //     const apiname = listOfApi[index].apiName;
  //     if (res.status === 'fulfilled') {      
  //       return {
  //         tableName: listOfApi[index].tableName,
  //         Status: res.value.Status,
  //         apiStatus: 'FAILED',
  //         message: `Successfully fetched ${apiname}`
  //       };
  //     } else {
  //       return {
  //         tableName: listOfApi[index].tableName,
  //         Status: 500,
  //         apiStatus: 'FAILED',
  //         message: `Failed to fetch ${apiname}`
  //       };
  //     }
  //   })

  // }
  async callAllApis(listOfApi: ApiListType[]) {
  this.apiresult = [];
  this.loadingMap = {};

  const apiresponse = listOfApi.map(async (apiData) => {
    const tableName = apiData.tableName;
    this.loadingMap[tableName] = true;

    try {
      const res = await this.fetchApiRespone.getResponse(apiData);
console.log("ress...",res);

      return {
        ...res
      };
    } catch (error) {
      return {
        tableName: apiData.tableName,
        Status:  500,
        apiStatus: 'FAILED',
        message:  `Failed to fetch ${apiData.apiName}`
      };
    } finally {
      // remove loading animation after delay
      setTimeout(() => {
        this.loadingMap[tableName] = false;
      }, 5000); // 1.5 seconds
    }
  });

  this.apiresult = await Promise.all(apiresponse);
}


async fetchAllTables() {
  const listOfTablenames = this.apilist.getTableData();

  for (const tableName of listOfTablenames) {
    const data = await this.sqlite.selectAllFromTable(tableName);
    console.log(`${tableName}:`, data);
  }
}


}

