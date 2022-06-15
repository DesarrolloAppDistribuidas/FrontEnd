import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Reservation } from '../models/reservations';
@Injectable({
    providedIn : 'root'
})

export class ReservationServices{
    URL_API = 'https://dad-g3-hotel.herokuapp.com/api/reservations';
    
    reservationSelected:Reservation={};
    constructor(private http: HttpClient){
    }
    createReservation(reserv:Reservation){
        return this.http.post(this.URL_API,reserv);
    }
}