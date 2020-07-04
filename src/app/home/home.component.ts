import { Router } from '@angular/router';
import { Events, EventDetails } from './../shared/model/event.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { TagColors } from './../shared/card/card.component';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tagColors = TagColors;
  events = new BehaviorSubject<Events[]>(null);



  constructor(private afs: AngularFirestore, private router: Router) {
    this.afs
      .collection('events')
      .snapshotChanges()
      .pipe(take(1)).subscribe(result => {
        this.events.next(result.map(e => {
          return (
            new Events (e.payload.doc.id, e.payload.doc.data() as EventDetails)
          ) ;
        }));
      });
  }

  ngOnInit(): void {

  }
  onEvent(eventId: string): void {
    console.log(eventId);
    this.router.navigate(['/event'])
  }

}
