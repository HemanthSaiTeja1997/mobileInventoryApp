import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,IonSearchbar, IonHeader, IonTitle, IonToolbar,IonLabel ,IonCheckbox,IonList,IonItem,IonInput} from '@ionic/angular/standalone';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.page.html',
  styleUrls: ['./organization.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonSearchbar, CommonModule,IonLabel, FormsModule, IonInput,IonCheckbox,IonList,IonItem]
})
export class OrganizationPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
