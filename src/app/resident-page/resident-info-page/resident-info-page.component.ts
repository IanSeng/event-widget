import { ResidentInfo } from './../../shared/list/list';
import { FireStoreService } from './../../service/firestore.service';
import { take } from 'rxjs/operators';
import { ActivatedRoute, Params } from '@angular/router';
import { Component } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
@Component({
  selector: 'app-resident-info-page',
  templateUrl: './resident-info-page.component.html',
  styleUrls: ['./resident-info-page.component.scss'],
})
export class ResidentInfoPage {
  residentInfo = new BehaviorSubject<ResidentInfo>(null);

  constructor(
    private activatedRoute: ActivatedRoute,
    private fireStoreService: FireStoreService
  ) {
    this.activatedRoute.params.pipe(take(1)).subscribe((params: Params) => {
      this.fetchData(params.code);
    });
    
  }

  fetchData(email: string) {
    this.fireStoreService
      .fetchResidentDetail(email)
      .pipe(take(1))
      .subscribe((data: ResidentInfo) => {
        this.residentInfo.next(data);
      });
  }
}
