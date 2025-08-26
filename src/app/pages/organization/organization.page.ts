import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonSearchbar, IonHeader, IonTitle, IonToolbar, IonLabel, IonCheckbox, IonList, IonItem, IonButton } from '@ionic/angular/standalone';
import { Sqliteservice } from 'src/app/services/sqlite/sqliteservice';
import { ActivatedRoute } from '@angular/router';
import { Apiservice } from 'src/app/services/apiservice/apiservice';
import { environment } from 'src/environments/environment';
import { Organization } from 'src/app/interfaces/loginrespone.interface';
import { OrgsearchPipe } from 'src/app/pipes/orgsearch-pipe';
import { ORGANIZATION_CONSTANTS } from 'src/app/utils/constants';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.page.html',
  styleUrls: ['./organization.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonSearchbar, CommonModule, IonLabel, FormsModule, IonCheckbox, IonList, IonItem, OrgsearchPipe, IonButton]
})
export class OrganizationPage implements OnInit {
  searchOrganization: string = '';
  activeOrganizations: Organization[] = [];
  selectedOrgCode: string | null = null;
  constructor(private sqlservice: Sqliteservice) { }

  async ngOnInit() {
    this.activeOrganizations = await this.sqlservice.selectAllFromTable(ORGANIZATION_CONSTANTS.TABLE_NAME);
    console.log("activeORG", this.activeOrganizations);
  }
  onCheckboxChange(code: string) {
    this.selectedOrgCode = code;
    console.log("selected>>>", this.selectedOrgCode);

  }
  submitSelection() {
    if (this.selectedOrgCode) {
      console.log("Selected Organization Code:", this.selectedOrgCode);
    } else {
      console.log("No organization selected");
    }
  }
}
