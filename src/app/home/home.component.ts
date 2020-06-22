import { TagColors } from './../shared/card/card.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tagColors = TagColors;
  events = [
    {
      name: 'Potluck',
      dateTime: 'June 8, 2020 at 8:00 pm',
      venue: 'ihouse studio',
      hosts: 'abc',
      tagColor: 'green-border'
    },
    {
      name: 'Potluck',
      dateTime: 'June 8, 2020 at 8:00 pm',
      venue: 'ihouse studio',
      hosts: 'abc',
      tagColor: 'blue-border'
    }
  ];


  constructor() {
  }

  ngOnInit(): void {
  }

}
