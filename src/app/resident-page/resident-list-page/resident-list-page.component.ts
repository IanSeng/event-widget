import { Router } from '@angular/router';
import { ResidentService } from './../../service/resident.service';
import { FireStoreService } from './../../service/firestore.service';
import { ResidentInfo } from './../../shared/list/list';
import { Subscription } from 'rxjs';
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-resident-list-page',
  templateUrl: './resident-list-page.component.html',
  styleUrls: ['./resident-list-page.component.scss'],
})
export class ResidentListPage implements OnDestroy {
  residentListData: ResidentInfo[];
  subscriptions: Subscription;

  constructor(
    private fireStoreService: FireStoreService,
    private residentService: ResidentService,
    private router: Router,
  ) {
    
    this.subscriptions = new Subscription();
    this.subscriptions
      .add(this.fireStoreService.fetchResidents().subscribe())
      .add(
        this.residentService.residentList.subscribe(
          (residentList: ResidentInfo[]) => {
            this.residentListData = residentList;
          }
        )
      );
  }

  onResident(email: string) {
    this.router.navigate([`/resident/${email}`])
  }

  onCheckIn(email: string) {
    this.fireStoreService.checkInResident(email);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
