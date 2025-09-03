import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonCard, IonCardContent, IonGrid, IonCol,IonRow } from "@ionic/angular/standalone";
import { Docs4ReceivingType } from 'src/app/interfaces/getApiResponse';
import { ShortDateFormaterPipe } from 'src/app/pipes/short-date-formater-pipe';

@Component({
  selector: 'app-common-card',
  templateUrl: './common-card.component.html',
  styleUrls: ['./common-card.component.scss'],
  imports: [IonCard, IonCardContent, IonGrid, IonCol,IonRow,ShortDateFormaterPipe],
})
export class CommonCardComponent  implements OnInit {
  @Input() po : any;
  @Output() cardClick = new  EventEmitter<Docs4ReceivingType>();
onCardClick(){
  this.cardClick.emit(this.po);
}

  constructor() { }

  ngOnInit() {}

}
