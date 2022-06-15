import { Component, OnInit } from '@angular/core';
import { Reservation } from '../../core/models/reservations';
import { ReservationServices } from '../../core/services/reservation.services';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  reSelected :Reservation={}
  constructor(public reservationServices: ReservationServices) { }

  ngOnInit(): void {
  }
  mostrar(){
    this.reSelected.date_in = "2022-06-14T20:16:56.082Z";
    this.reSelected.date_out = "2022-06-18T20:16:56.082Z";
    this.reservationServices.reservationSelected=this.reSelected;
    console.log(this.reservationServices.reservationSelected);
  }
}
