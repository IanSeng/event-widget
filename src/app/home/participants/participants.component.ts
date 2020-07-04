import { UserCheckInInfo } from './../../shared/model/event.model';
import { map, take } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { AngularFirestore, DocumentData } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-participants',
    templateUrl: './participants.component.html',
    styleUrls: ['./participants.component.scss']
})

export class ParticipantsComponent implements OnInit{
    datas = new BehaviorSubject<UserCheckInInfo[]>(null);
    constructor(private afs: AngularFirestore) {
        this.afs
            .collection('event-attendees')
            .doc(`20201023MTYwMEFB`)
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
    }

    ngOnInit(): void{
        this.datas.subscribe(e => console.log(e))
    }
}

// this.afs.collection('event-attendees')
//     .doc('20201023MTYwMEFB')
//     .collection('attendess')
//     .get()
//     .subscribe((result: DocumentData) => {
//         console.log(result.data());
//     })