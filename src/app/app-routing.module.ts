import { ResidentPage } from './resident-page/resident-page.component';
import { ResidentListPage } from './resident-page/resident-list-page/resident-list-page.component';
import { CreateEventPageComponent } from './create-event-page/create-event-page.component';
import { EventPageComponent } from './home/event-page/event-page.component';
import { ParticipantsComponent } from './home/participants/participants.component';
import { CompletePageComponent } from './event-checkin/complete-page/complete-page.component';
import { CodeSearchPageComponent } from './event-checkin/code-search-page/code-search-page.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CheckinPageComponent } from './event-checkin/checkin-page/checkin-page.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { EventCheckinComponent } from './event-checkin/event-checkin.component';
import { ResidentInfoPage } from './resident-page/resident-info-page/resident-info-page.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent},
    { path: 'checkin', component: EventCheckinComponent, children: [
        { path: '', component: CodeSearchPageComponent},
        { path: ':code', component: CheckinPageComponent},
        { path: ':code/complete', component: CompletePageComponent}
    ]},
    { path: 'error', component: ErrorPageComponent},
    { path: 'participants', component: ParticipantsComponent},
    { path: 'event', component: EventPageComponent},
    { path: 'createevent', component: CreateEventPageComponent},
    { path: 'resident', component: ResidentPage, children: [
        {path: '', component: ResidentListPage},
        {path: ':code', component: ResidentInfoPage}
    ]}
    
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }