import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class Toastservice {
  constructor(private toastController: ToastController) { }
  async presentToast(position: 'top' | 'middle' | 'bottom', color: 'success' | 'danger' | 'warning', message = 'Member Saved Succefully') {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: position,
      color:color
    });

    await toast.present();
  }
}
