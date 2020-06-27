import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { EventCheckinComponent } from './event-checkin/event-checkin.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent},
    { path: 'checkin', component: EventCheckinComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }