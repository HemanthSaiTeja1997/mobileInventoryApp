import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular/standalone';

@Injectable({
  providedIn: 'root'
})
export class Alertservice {
  constructor(private alertController: AlertController) {}

  async presentAlert(message:string|undefined) {
    const alert = await this.alertController.create({
      message: message,
      buttons: ['Ok'],
    });

    await alert.present();
  }

  
}
