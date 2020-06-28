import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-event-checkin',
    templateUrl: './event-checkin.component.html',
    styleUrls: ['./event-checkin.component.scss']
})

export class EventCheckinComponent implements OnInit {
    eventCode: string;
    date: Date;
    dateString: string;
    timeString: string;
    private itemsCollection: AngularFirestoreCollection<string>;
    items: Observable<string>;
    loginForm: FormGroup;
    error = '';
    isLoading = false;
    constructor(private firestore: AngularFirestore, private route: ActivatedRoute) {
        this.date = new Date('Fri Oct 23 2020 11:23:13 GMT-0400');
        this.timeString = `${this.date.getHours().toString()} + ${this.date.getMinutes().toString()}`;
        this.dateString = `${this.date.getFullYear().toString()} + ${(this.date.getMonth() + 1).toString()} + ${this.date.getDate()}`;


    }

    ngOnInit(): void {
        this.initForm();
        this.route.firstChild.params.subscribe((params: Params) => {
            this.eventCode = params.code;
        });
        this.checkEvent();


    }

    addItem() {
        return new Promise<any>((resolve, reject) => {
            this.firestore
                .collection('event-attendees')
                .doc('20201028MTEyMwo=')
                .collection("attendess")
                .add({ name: 'AbC', date: new Date(), email: 'abc-email' })
                .then(res => { }, err => reject(err));
        });
    }

    checkEvent() {
        let a = this.firestore
            .collection('event-attendees')
            .doc('20201028MTEyMwo=')
            .get().subscribe(a => {
                console.log(a.data().date.toDate());
            });

 


    }


    initForm() {
        const email = '';
        const password = '';
        this.loginForm = new FormGroup({
            'email': new FormControl(email, [Validators.required, Validators.email]),
            'password': new FormControl(password, Validators.required),
        })
    }

    onLogin() {

    }
}
