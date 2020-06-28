import { CodeSearchPageComponent } from './event-checkin/code-search-page/code-search-page.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CheckinPageComponent } from './event-checkin/checkin-page/checkin-page.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { EventCheckinComponent } from './event-checkin/event-checkin.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent},
    { path: 'checkin', component: EventCheckinComponent, children: [
        { path: '', component: CodeSearchPageComponent},
        { path: ':code', component: CheckinPageComponent}
    ]},
    { path: 'error', component: ErrorPageComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }