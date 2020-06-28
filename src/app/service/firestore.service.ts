import { map, catchError, take } from 'rxjs/operators';
import { EventAttendees } from './../shared/model/event.model';
import { AngularFirestore, DocumentData } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Subject, of, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FireStoreService {
    eventDetail = new Subject<EventAttendees>();
    /*
    * For date and time purpose
    */
    date: Date;
    dateString: string;
    timeString: string;

    constructor(private afs: AngularFirestore) {
        this.date = new Date('Fri Oct 23 2020 11:23:13 GMT-0400');
        this.timeString = `${this.date.getHours().toString()} + ${this.date.getMinutes().toString()}`;
        this.dateString = `${this.date.getFullYear().toString()}${(this.date.getMonth() + 1).toString()}${this.date.getDate()}`;
    }

 

    checkInEventInfo(eventCode: string) {
        this.afs
            .collection('event-attendees')
            .doc(`${this.dateString}${eventCode}`)
            .get()
            .pipe(take(1)).subscribe(
                (result: DocumentData) => {
                    if (result.data()) {
                        this.eventDetail.next({ date: result.data().date.toDate(), name: result.data().name } as EventAttendees);
                    } else {
                        throw throwError('response');
                    }
                });
    }
}