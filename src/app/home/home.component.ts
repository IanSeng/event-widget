import { TagColors } from './../shared/card/card.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tagColors = TagColors;
  constructor() {
  }

  ngOnInit(): void {
  }

}
