import { ResidentInfo, Status } from './../shared/list/list';
import { ResidentService } from './resident.service';
import { map, catchError, take, tap } from 'rxjs/operators';
import { EventAttendees, UserCheckInInfo } from './../shared/model/event.model';
import { AngularFirestore, DocumentData } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Subject, of, throwError, Observable, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FireStoreService {
  eventDetail = new BehaviorSubject<EventAttendees>(null);
  userInfo = new BehaviorSubject<UserCheckInInfo>(null);
  /*
   * For date and time purpose
   */
  date: Date;
  dateString: string;
  timeString: string;

  constructor(
    private afs: AngularFirestore,
    private residentService: ResidentService
  ) {
    this.date = new Date('Fri Oct 23 2020 11:23:13 GMT-0400');
    this.timeString = `${this.date
      .getHours()
      .toString()} + ${this.date.getMinutes().toString()}`;
    this.dateString = `${this.date.getFullYear().toString()}${(
      this.date.getMonth() + 1
    ).toString()}${this.date.getDate()}`;
  }

  checkInEventInfo(eventCode: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      console.log(`${this.dateString}${eventCode}`);
      this.afs
        .collection('event-attendees')
        .doc(`${this.dateString}${eventCode}`)
        .get()
        .pipe(take(1))
        .subscribe((result: DocumentData) => {
          if (result.data()) {
            this.eventDetail.next({
              start: result.data().start.toDate(),
              end: result.data().end.toDate(),
              name: result.data().name,
            } as EventAttendees);
            resolve(true);
          } else {
            reject(false);
          }
        });
    });
  }

  async checkIn(
    eventCode: string,
    userInfo: UserCheckInInfo
  ): Promise<boolean> {
    try {
      const res = await this.afs
        .collection('event-attendees')
        .doc(`${this.dateString}${eventCode}`)
        .collection('attendess')
        .add(userInfo);
      this.userInfo.next(userInfo);
      return true;
    } catch (err) {
      return false;
    }
  }

  fetchResidents() {
    return this.afs
      .collection('residents')
      .snapshotChanges()
      .pipe(
        map((data) => {
          return data.map((resident) => {
            return resident.payload.doc.data() as ResidentInfo;
          });
        }),
        tap((residents: ResidentInfo[]) => {
          this.residentService.getResidentList(residents);
        })
      );
  }

  fetchResidentDetail(email: string) {
    return this.afs
      .collection('residents')
      .doc(email)
      .snapshotChanges()
      .pipe(
        take(1),
        map((data) => {
          return data.payload.data() as ResidentInfo;
        })
      );
  }

  checkInResident(email: string) {
    this.afs
      .collection('residents')
      .doc(email)
      .set({ status: Status.MovedIn }, { merge: true });
  }
}
