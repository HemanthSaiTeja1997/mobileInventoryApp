import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Podata {
  private poData: any = null;

  setData(data: any) {
    this.poData = data;
  }

  getData() {
    return this.poData;
  }

  clear() {
    this.poData = null;
  }
  
}
