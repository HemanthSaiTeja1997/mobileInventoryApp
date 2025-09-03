import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonMenu, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonGrid, IonHeader, IonMenuButton, IonList, IonTitle, IonToolbar, IonIcon, IonButtons, IonButton, IonCol, IonRow } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { home, menu } from 'ionicons/icons';
import { Sqliteservice } from 'src/app/services/sqlite/sqliteservice';
import { NavController } from '@ionic/angular';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [RouterModule, IonContent, IonCard, IonRow, IonHeader, IonMenu, IonMenuButton, IonList, IonIcon, IonGrid, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonButton, IonCardContent, IonCardHeader, IonCol]
})
export class DashboardPage implements OnInit {

  constructor(private sqlite: Sqliteservice, private navCltr: NavController) {
    addIcons({
      menu,
      home
    })
  }

  ngOnInit() {
  }
  navigateToDoc4Receving() {
    this.navCltr.navigateForward(['/good-recipt']);
  }

}
