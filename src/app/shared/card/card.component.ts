import { Component, Input } from '@angular/core';

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
    @Input() dateTime: string;
    @Input() venue: string;
    @Input() hosts: string;
    @Input() tagColor = TagColors.GREEN;
}