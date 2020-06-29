import { Router } from '@angular/router';
import { FireStoreService } from './../../service/firestore.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
    selector: 'app-code-search',
    templateUrl: './code-search-page.component.html',
    styleUrls: ['./code-search-page.component.scss']
})

export class CodeSearchPageComponent implements OnInit {

    codeForm: FormGroup;
    error = '';
    isLoading = false;

    constructor(private fireStoreService: FireStoreService, private router: Router) {

    }
    ngOnInit(): void {
        this.codeForm = new FormGroup({
            eventCode: new FormControl('', [Validators.required])
        })
    }

    onSubmit() {
        this.fireStoreService.checkInEventInfo(this.codeForm.value.eventCode)
            .then(res => { this.router.navigate([`/checkin/${this.codeForm.value.eventCode}`]) })
            .catch(err => {
                this.error = 'This event code does not exists';
                this.isLoading = false;
            });
    }


}