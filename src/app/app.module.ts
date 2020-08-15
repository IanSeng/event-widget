import { ResidentPage } from './resident-page/resident-page.component';
import { ResidentListPage } from './resident-page/resident-list-page/resident-list-page.component';
import { ListComponet } from './shared/list/list.component';
import { CreateEventPageComponent } from './create-event-page/create-event-page.component';
import { CommentComponent } from './home/comment/comment.component';
import { EventPageComponent } from './home/event-page/event-page.component';
import { ParticipantsComponent } from './home/participants/participants.component';
import { CompletePageComponent } from './event-checkin/complete-page/complete-page.component';
import { CodeSearchPageComponent } from './event-checkin/code-search-page/code-search-page.component';
import { CheckinPageComponent } from './event-checkin/checkin-page/checkin-page.component';
import { CardCompnent } from './shared/card/card.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from './../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { EventCheckinComponent } from './event-checkin/event-checkin.component';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { PolicyBannerComponent } from './shared/policy-banner/policy-banner.component';
import {FormsModule} from '@angular/forms';
import { ResidentInfoPage } from './resident-page/resident-info-page/resident-info-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LoadingSpinnerComponent,
    CardCompnent,
    CheckinPageComponent,
    ErrorPageComponent,
    CodeSearchPageComponent,
    EventCheckinComponent,
    CompletePageComponent,
    ParticipantsComponent,
    EventPageComponent,
    PolicyBannerComponent,
    CommentComponent,
    CreateEventPageComponent,
    ListComponet,
    ResidentPage,
    ResidentListPage,
    ResidentInfoPage,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule,
    AngularFireStorageModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
