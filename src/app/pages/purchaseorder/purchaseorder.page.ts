import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Podata } from 'src/app/services/podata/podata';

@Component({
  selector: 'app-purchaseorder',
  templateUrl: './purchaseorder.page.html',
  styleUrls: ['./purchaseorder.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PurchaseorderPage implements OnInit {
purchaseData:any;
  constructor(private poDataService: Podata) { }

  ngOnInit() {
       this.purchaseData = this.poDataService.getData();
  console.log('Received purchaseData:', this.purchaseData);
  }

}
