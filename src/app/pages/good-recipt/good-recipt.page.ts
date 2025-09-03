import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonIcon, IonTitle, IonToolbar, IonCard, IonCardContent, IonGrid, IonCol,IonRow } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBackOutline } from 'ionicons/icons';
import { RouterModule } from '@angular/router';
import { Sqliteservice } from 'src/app/services/sqlite/sqliteservice';
import { Docs4ReceivingType } from 'src/app/interfaces/getApiResponse';
import { NavController } from '@ionic/angular';
import { CommonCardComponent } from "src/app/components/common-card/common-card.component";
import { Podata } from 'src/app/services/podata/podata';
@Component({
  selector: 'app-good-recipt',
  templateUrl: './good-recipt.page.html',
  styleUrls: ['./good-recipt.page.scss'],
  standalone: true,
  imports: [IonContent, IonIcon, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterModule, CommonCardComponent]
})


export class GoodReciptPage implements OnInit {
  doc4Receiving :Docs4ReceivingType[]=[];
  // DocumentsForReceiving :any[]=[];


  constructor(private sqlite: Sqliteservice,private poDataService: Podata,private navCltr: NavController) {
    addIcons({
chevronBackOutline
    })
   }

  ngOnInit() {
    this.getData();
  }
    async getData() {
    this.doc4Receiving =  await this.sqlite.getDocs4Receiving('DocumentsForReceiving');
    // this.DocumentsForReceiving= await this.sqlite.selectAllFromTable('DocumentsForReceiving');
    // console.log("documetData", this.DocumentsForReceiving);

    }
    navigateToOrder(data:any) {
   this.poDataService.setData(data);
  this.navCltr.navigateForward(['/order']);
  }
}
