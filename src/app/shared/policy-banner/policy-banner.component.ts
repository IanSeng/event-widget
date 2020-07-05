import { EventPolicy } from './../model/event.model';
import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'app-policy-banner',
    templateUrl: './policy-banner.component.html',
    styleUrls: ['./policy-banner.component.scss']
})

export class PolicyBannerComponent implements OnInit{
    @Input() policies: EventPolicy;
    constructor() {}
    ngOnInit() {
        console.log(this.policies);
    }
}