import { Observable } from 'rxjs';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ResidentInfo, Status } from './list';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponet {
  status: typeof Status = Status;
  @Input() datas: any;
  @Output() change: EventEmitter<number> = new EventEmitter<number>();
  tests: Array<ResidentInfo> = [
    {
      firstName: 'Christopher',
      lastName: 'Liam',
      room: 123,
      status: 2,
    },
    {
      firstName: 'Gigi',
      lastName: 'Liam',
      room: 323,
      status: 0,
    },
    {
      firstName: 'Adien',
      lastName: 'Ian',
      room: 223,
      status: 1,
    },
  ];
  

  constructor() {
    this.tests.sort((a, b) => a.room - b.room);
  }

  onCheckIn(number: number){
    this.change.emit(number);
  }


}
