import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

export enum TagColors {
    GREEN = 'green-border',
    BLUE = 'blue-border',
    PURPLE = 'purple-border'
}

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardCompnent {
    @Input() name: string;
    @Input() dateTime: string;
    @Input() venue: string;
    @Input() hosts: string;
    @Input() tagColor = TagColors.GREEN;

    @Output() eventClick: EventEmitter = new EventEmitter();

    public onEventClick(): void {
        this.eventClick.emit(null);
    }

}