import { Component, OnInit } from '@angular/core';
import { ReservationServices } from 'src/app/app/core/services/reservation.services';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.css']
})
export class ReservationDetailsComponent implements OnInit {

  constructor(public reservationServices : ReservationServices) {
    this.reservationServices.reservationSelected.email = "junior@gmail.com";
    this.reservationServices.reservationSelected.id_room = "A5";
    this.reservationServices.reservationSelected.number_adults = 2;
    this.reservationServices.reservationSelected.number_children = 3;
    this.reservationServices.reservationSelected.date_in = new Date("2022-06-15T00:00:00.000Z");
    this.reservationServices.reservationSelected.date_out =new Date("2022-06-20T00:00:00.000Z");
    this.reservationServices.reservationSelected.payment = 322;
   }

  ngOnInit(): void {
    console.log(this.reservationServices.reservationSelected);
  }

  reservar(){
    this.reservationServices.createReservation(this.reservationServices.reservationSelected).subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log(err);
      }
    )
    alert("pago realizado correctamente");
  }

}
