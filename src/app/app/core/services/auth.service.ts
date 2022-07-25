import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../models/user';
@Injectable({
    providedIn : 'root'
})

export class AuthServices{
    URL_API = 'https://dad-g3-hotel.herokuapp.com/api/auth/login';
    userlogin: User={};

    constructor(private http: HttpClient){
    }

    login(user:User){
        return this.http.post(this.URL_API,user);
    }


}