import { Component, OnInit } from '@angular/core';
import { ReservationServices } from 'src/app/app/core/services/reservation.services';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  constructor(public reservationServices: ReservationServices) { }

  ngOnInit(): void {
  }

  selected(){
    
  }
}
