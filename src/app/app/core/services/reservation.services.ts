import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Reservation } from '../models/reservations';
import { SearchRates } from '../models/searchRates';
@Injectable({
    providedIn : 'root'
})

export class ReservationServices{
    URL_API = 'https://dad-g3-hotel.herokuapp.com/api/reservations';
    
    public reservationSelected:Reservation={};
    public search:SearchRates={};
    constructor(private http: HttpClient){
    }
    createReservation(reserv:Reservation){
        return this.http.post(this.URL_API,reserv);
    }
}
