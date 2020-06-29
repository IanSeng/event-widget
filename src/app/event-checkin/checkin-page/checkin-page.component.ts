import { FireStoreService } from '../../service/firestore.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection, DocumentData } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map, catchError, take } from 'rxjs/operators';
import { EventAttendees } from '../../shared/model/event.model';

@Component({
    selector: 'app-event-checkin',
    templateUrl: './checkin-page.component.html',
    styleUrls: ['./checkin-page.component.scss']
})

export class CheckinPageComponent implements OnInit {
    eventCode: string;

    private itemsCollection: AngularFirestoreCollection<string>;
    items: Observable<string>;
    eventInfo: Observable<EventAttendees>;
    loginForm: FormGroup;
    error = '';
    isLoading = false;
    constructor(private fireStoreService: FireStoreService, private activatedRoute: ActivatedRoute, private router: Router) {
        this.eventInfo = this.fireStoreService.eventDetail;

        this.activatedRoute.params.subscribe((params: Params) => {
            this.eventCode = params.code;
        });
        

        this.fireStoreService.eventDetail.pipe(take(1)).subscribe(res => {
            console.log(atob('MTEyM0FB'));
                let time = atob('MTEyM0FB').slice(0, -2);
                console.log(new Date().getTime())
                console.log(res.end.getTime())
            if (res == null) {
                this.fireStoreService.checkInEventInfo(this.eventCode).then().catch(err => { this.router.navigate(['/error']) });
            }
        });

    }

    ngOnInit(): void {
        this.initForm();




    }


    // addItem() {
    //     return new Promise<any>((resolve, reject) => {
    //         this.firestore
    //             .collection('event-attendees')
    //             .doc('20201028MTEyMwo=')
    //             .collection("attendess")
    //             .add({ name: 'AbC', date: new Date(), email: 'abc-email' })
    //             .then(res => { }, err => reject(err));
    //     });
    // }

    // checkEvent() {
    //     this.eventInfo = this.firestore
    //         .collection('event-attendees')
    //         .doc('20201028MTEyMwo=')
    //         .get()
    //         .pipe(map((result: DocumentData) => {
    //             console.log(result.data().date.toDate())
    //             return { date: result.data().date.toDate(), name: result.data().name } as EventAttendees;
    //         }),
    //         catchError(err => {
    //             console.log(err)
    //             return err;
    //         })
    //         )
    //     // .subscribe((result: EventAttendees) => {
    //     //     console.log(result.data());
    //     // });


    // }


    initForm() {
        const email = '';
        const password = '';
        this.loginForm = new FormGroup({
            'email': new FormControl(email, [Validators.required, Validators.email]),
            'password': new FormControl(password, Validators.required),
        })
    }

    onCheckIn() {

    }
}
