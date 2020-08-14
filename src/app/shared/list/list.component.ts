import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ResidentInfo, Status } from './list';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponet {
  status: typeof Status = Status;
  @Input() data: Array<ResidentInfo>;
  @Output() change: EventEmitter<number> = new EventEmitter<number>();
  tests: Array<ResidentInfo> = [
    {
      firstName: 'Christopher',
      lastName: 'Liam',
      roomNumber: 123,
      status: 2,
    },
    {
      firstName: 'Gigi',
      lastName: 'Liam',
      roomNumber: 323,
      status: 0,
    },
    {
      firstName: 'Adien',
      lastName: 'Ian',
      roomNumber: 223,
      status: 1,
    },
  ];
  

  constructor() {
    this.tests.sort((a, b) => a.roomNumber - b.roomNumber);
  }

  onCheckIn(number: number){
    this.change.emit(number);
  }


}
