import { Observable } from 'rxjs';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ResidentInfo, Status } from './list';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponet {
  // Enum to be used in template 
  status: typeof Status = Status;

  // Input datas from parents components 
  @Input() datas: ResidentInfo[];

  // Emit email for resident info
  @Output() residentInfoEmail: EventEmitter<string> = new EventEmitter<string>();

  // Emit email for check in
  @Output() checkInEmial: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    //this.tests.sort((a, b) => a.room - b.room);
  }

  onResident(residentEmail: string) {
    this.residentInfoEmail.emit(residentEmail);
  }

  onCheckIn(residentEmail: string){
    this.checkInEmial.emit(residentEmail);
  }


}
