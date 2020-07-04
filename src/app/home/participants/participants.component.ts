import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFirestore, DocumentData } from '@angular/fire/firestore';
import { Component } from '@angular/core';
@Component({
    selector: 'app-participants',
    templateUrl: './participants.component.html',
    styleUrls: ['./participants.component.scss']
})

export class ParticipantsComponent {
    data: Observable<DocumentData>;
    constructor(private afs: AngularFirestore) {
        this.afs
                .collection('event-attendees')
                .doc(`20201023MTYwMEFB`)
                .collection('attendess')
                .snapshotChanges()
                .subscribe(result => {
                    console.log(result)
                })
    }
}

// this.afs.collection('event-attendees')
//     .doc('20201023MTYwMEFB')
//     .collection('attendess')
//     .get()
//     .subscribe((result: DocumentData) => {
//         console.log(result.data());
//     })