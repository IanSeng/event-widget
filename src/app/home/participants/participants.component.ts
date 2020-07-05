import { UserCheckInInfo } from './../../shared/model/event.model';
import { BehaviorSubject, Subscription } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
@Component({
    selector: 'app-participants',
    templateUrl: './participants.component.html',
    styleUrls: ['./participants.component.scss']
})

export class ParticipantsComponent implements OnInit, OnDestroy{
    @Input() eventAttendeesId: string;
    datas = new BehaviorSubject<UserCheckInInfo[]>(null);
    subscription: Subscription;
    constructor(private afs: AngularFirestore) {
    }

    ngOnInit(): void{
        console.log(this.eventAttendeesId)
        this.subscription = this.afs
            .collection('event-attendees')
            .doc(this.eventAttendeesId)
            .collection('attendess')
            .snapshotChanges()
            .subscribe(result => {
                this.datas.next(result.map(e => {
                    return ({
                        email: e.payload.doc.data().email,
                        name: e.payload.doc.data().name,
                        time: e.payload.doc.data().time.toDate()
                    }) as UserCheckInInfo;
                }))
            })
        this.datas.subscribe(e => console.log(e))
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}

// this.afs.collection('event-attendees')
//     .doc('20201023MTYwMEFB')
//     .collection('attendess')
//     .get()
//     .subscribe((result: DocumentData) => {
//         console.log(result.data());
//     })