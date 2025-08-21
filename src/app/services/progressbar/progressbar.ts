import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class Progressbar {
  private loading: HTMLIonLoadingElement | null = null;
  constructor(private loadingCtrl:LoadingController){}

  async progressBar(message:string,duration:number,spinner:"bubbles" | "circles" | "circular" | "crescent" | "dots" | "lines" | "lines-small" | "lines-sharp" | "lines-sharp-small"){
this.loading = await this.loadingCtrl.create({
    message:message,
    spinner: spinner,
    duration: duration
  });
  await this.loading.present();
  }  
  
  async dismiss() {
    if (this.loading) {
      await this.loading.dismiss();
      this.loading = null;
    }
  }
}
