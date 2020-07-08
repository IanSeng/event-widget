import { Events, EventDetails } from './../../shared/model/event.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { take, exhaustMap } from 'rxjs/operators';
import { BehaviorSubject, of } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
    selector: 'app-event-page',
    templateUrl: './event-page.component.html',
    styleUrls: ['./event-page.component.scss']
})

export class EventPageComponent {
    eventId: string;
    event = new BehaviorSubject<Events>(null);
    attendeesNumber = new BehaviorSubject<string>(null);
    attendeesId: string;
    aaa: string;
    
    storageRef: any;
    constructor(private afs: AngularFirestore, private afStorage: AngularFireStorage, private activatedRoute: ActivatedRoute) {
        this.eventId = this.activatedRoute.snapshot.queryParamMap.get('eventId');
        this.afs
            .collection('events')
            .doc(this.eventId)
            .snapshotChanges()
            .pipe(exhaustMap(result => {
                this.event.next(new Events('w', result.payload.data() as EventDetails));
                return of(result.payload.data());
            }))
            .pipe(take(1))
            .subscribe((result: EventDetails) => {
                this.getAttendeesNumber(result.eventAttendeesId);
            });

            this.storageRef = afStorage.ref('user-images/dog.jpg');
            this.storageRef.getDownloadURL().subscribe(url => console.log(url));

    }
    getAttendeesNumber(attendeesId: string) {
        this.afs.collection('event-attendees')
            .doc(attendeesId)
            .collection('attendess')
            .get()
            .pipe(take(1)).subscribe(result => {
                this.attendeesNumber.next(result.size.toString())
            });
    }
}