import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
    selector: 'app-event-checkin',
    templateUrl: './event-checkin.component.html',
    styleUrls: ['./event-checkin.component.scss']
})

export class EventCheckinComponent {
    private itemsCollection: AngularFirestoreCollection<string>;
    items: Observable<string>;
    constructor(private firestore: AngularFirestore) {

    }

    addItem() {
        return new Promise<any>((resolve, reject) =>{
            this.firestore
                .collection("coffeeOrders")
                .add({aa: "aa"})
                .then(res => {}, err => reject(err));
        });
    }
}
