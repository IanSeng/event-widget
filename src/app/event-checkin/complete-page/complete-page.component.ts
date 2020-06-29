import { Router } from '@angular/router';
import { UserCheckInInfo, EventAttendees } from './../../shared/model/event.model';
import { Observable } from 'rxjs';
import { FireStoreService } from './../../service/firestore.service';
import { Component } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
    selector: 'app-complete-page',
    templateUrl: './complete-page.component.html',
    styleUrls: ['./complete-page.component.scss']
})

export class CompletePageComponent {
    eventDetail: Observable<EventAttendees>;
    userInfo: Observable<UserCheckInInfo>;
    constructor(private fireStoreService: FireStoreService, private router: Router) {
        this.fireStoreService.userInfo.pipe(take(1)).subscribe(res => {
            if (res == null) {
                this.router.navigate(['checkin']);
            }
        });
        this.eventDetail = this.fireStoreService.eventDetail;
        this.userInfo = this.fireStoreService.userInfo;
    }
}
