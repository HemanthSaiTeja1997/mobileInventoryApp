import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonIcon, IonCard, IonCardContent } from '@ionic/angular/standalone';
import { Router, RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import { chevronBackOutline, chevronForwardOutline } from 'ionicons/icons';
import { CommonCardComponent } from "src/app/components/common-card/common-card.component";
import { Sqliteservice } from 'src/app/services/sqlite/sqliteservice';
import { Podata } from 'src/app/services/podata/podata';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader,IonIcon, IonTitle, IonToolbar, RouterModule, CommonModule, FormsModule, CommonCardComponent, IonCard, IonCardContent]
})
export class OrderPage implements OnInit {
   podata:any ;
  orderToBeReceived:any[]=[];
  constructor(private sqlite:Sqliteservice,private router: Router,private poDataService: Podata,private navCltr: NavController) { 
     addIcons({
    chevronForwardOutline,
    chevronBackOutline
        })
  }
  ngOnInit() {
   this.podata = this.poDataService.getData();
  console.log('Received podata:', this.podata);
this.getOrders();
  }
  async getOrders():Promise<void>{
    this.orderToBeReceived = await this.sqlite.getPurchaseOrder(this.podata.PoNumber);
    console.log("itmes", this.orderToBeReceived);
  }

  navigateToPurchaseOrder(data:any) {
   this.poDataService.setData(data);
  this.navCltr.navigateForward(['/purchaseorder']);
  }

}
