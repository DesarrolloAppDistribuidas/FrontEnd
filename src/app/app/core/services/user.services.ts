import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../models/user';
@Injectable({
    providedIn : 'root'
})

export class UserServices{
    URL_API = 'https://dad-g3-hotel.herokuapp.com/api/users';
    userRegister: User={};
    userLogin: User={};
    constructor(private http: HttpClient){
    }
    createUser(user:User){
        return this.http.post(this.URL_API,user);
    }

    getUserByDni(dni: any ): Observable<any>{
        return this.http.get<any>(this.URL_API+"/dni/"+dni);
    }

    getUserByEmail(email: any ): Observable<any>{
        return this.http.get<any>(this.URL_API+"/email/"+email);
    }

    deleteUser(_id:any){
        return this.http.delete(this.URL_API+"/"+_id);
    }

    putUser(user:User){
        return this.http.put(this.URL_API+"/dni/"+user.dni,user);
    }
}