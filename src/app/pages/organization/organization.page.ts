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

@Component({
  selector: 'app-organization',
  templateUrl: './organization.page.html',
  styleUrls: ['./organization.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonSearchbar, CommonModule, IonLabel, FormsModule, IonCheckbox, IonList, IonItem, OrgsearchPipe, IonButton]
})
export class OrganizationPage implements OnInit {
  defaultOrgId!: number;
  searchOrganization: string = '';
  activeOrganizations: Organization[] = [];
  selectedOrgCode: string | null = null;
  constructor(private sqlservice: Sqliteservice, private activeRoute: ActivatedRoute, private apiservice: Apiservice) { }

  ngOnInit() {
    this.defaultOrgId = this.activeRoute.snapshot.params['id'];
    console.log(">>>>>>", this.defaultOrgId);
    this.apiservice.apiRequest('GET', `${environment.Organizationurl}/${this.defaultOrgId}`).subscribe({
      next: (res) => {
        const respones = res as any[][];
        console.log("inside organization", respones);
        if (respones && Array.isArray(respones) && respones.length > 0 && typeof respones[0] === 'object') {

          this.sqlservice.createOrganizationTable("organizationDB", "organizations", respones);
          this.sqlservice.userOrganizations$.subscribe({
            next: (res) => {
              this.activeOrganizations = res;
              console.log("activeORG", this.activeOrganizations);

            }
          })
        }

      }
    })  }


     onCheckboxChange(code: string) {
    this.selectedOrgCode = code; 
  }
    submitSelection() {
    if (this.selectedOrgCode) {
      console.log("Selected Organization Code:", this.selectedOrgCode);
    } else {
      console.log("No organization selected");
    }
  }
}
