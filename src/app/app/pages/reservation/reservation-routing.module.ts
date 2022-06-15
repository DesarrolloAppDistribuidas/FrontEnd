import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';
import { ReservationComponent } from './reservation.component';
import { RoomsComponent } from './rooms/rooms.component';


const routes: Routes = [
  {
    path: '',
    component: ReservationComponent,
    children:[
      {
        path: 'reviewDetail',
        component: ReservationDetailsComponent,
      },
      {
        path: '',
        component: RoomsComponent,
      },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservationRoutingModule {}
