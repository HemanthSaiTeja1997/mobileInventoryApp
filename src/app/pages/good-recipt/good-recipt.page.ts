import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonIcon, IonTitle, IonToolbar, IonCard, IonCardContent, IonGrid, IonCol,IonRow } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBackOutline } from 'ionicons/icons';
import { RouterModule } from '@angular/router';
import { Sqliteservice } from 'src/app/services/sqlite/sqliteservice';
import { Docs4ReceivingType } from 'src/app/interfaces/getApiResponse';

@Component({
  selector: 'app-good-recipt',
  templateUrl: './good-recipt.page.html',
  styleUrls: ['./good-recipt.page.scss'],
  standalone: true,
  imports: [IonContent, IonIcon, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterModule, IonCard, IonCardContent, IonGrid,IonRow, IonCol]
})


export class GoodReciptPage implements OnInit {
//   poList: any[] = [
//   {
//     PoNumber: 3551,
//     PoType: "STD PO",
//     VendorName: "MKM Technologies",
//     items: 4,
//     date: "29-Aug-25",
//     Requestor: "John, Mr. Smith"
//   },
//   {
//     PoNumber: 3552,
//     PoType: "STD PO",
//     VendorName: "MKM Technologies",
//     items: 4,
//     date: "26-Aug-25",
//     Requestor: "John, Mr. Smith"
//   }
// ];
  doc4Receiving :Docs4ReceivingType[]=[];

  constructor(private sqlite: Sqliteservice) {
    addIcons({
chevronBackOutline
    })
   }

  ngOnInit() {
    this.getData();

  }
  async getData() {
    this.doc4Receiving = await this.sqlite.getDocs4Receiving('DocumentsForReceiving');
    console.log("documetData", this.doc4Receiving);
  }
}
