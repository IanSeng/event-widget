import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CheckInComponent } from '../pages/checkin/checkin.component';


const appRoutes: Routes = [
    {
        path: 'checkinstudent', component: CheckInComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class RoutingModule { }
