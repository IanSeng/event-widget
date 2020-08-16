import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { ResidentInfo } from '../shared/list/list';
@Injectable({
  providedIn: 'root',
})
export class ResidentService {
  residentList = new Subject<ResidentInfo[]>();

  getResidentList(residents: ResidentInfo[]) {
    return this.residentList.next(residents);
  };
}
