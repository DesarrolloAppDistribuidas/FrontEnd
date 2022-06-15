import { Component, OnInit } from '@angular/core';
import { ReservationServices } from '../../core/services/reservation.services';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor(public reservationServices: ReservationServices) { 
    
  }

  ngOnInit(): void {
    console.log(this.reservationServices.reservationSelected);
  }

}
