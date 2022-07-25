import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServices } from '../../core/services/auth.service';
import { ReservationServices } from '../../core/services/reservation.services';
import { OverviewComponent } from '../overview/overview.component';
import { NgForm } from '@angular/forms';
import { UserServices } from '../../core/services/user.services';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  alertLogin: boolean=false;
  loginCorrect: boolean=false;
  loginC:boolean=false;

  constructor(public reservationServices: ReservationServices,
    private router: Router,
    public authServices: AuthServices,
    public userServices:UserServices,
    ) { 
    
  }

  ngOnInit(): void {
    console.log(this.reservationServices.search);
  }

  login(Form: NgForm){
    this.authServices.login(Form.value).subscribe(
      res=>{
        console.log(res);
        this.loginCorrect=true;
        this.loginC=true;
        this.getUserByEmail(Form.value.email);
        this.reservationServices.search.email=Form.value.email;
        this.reservationServices.search.status=true;
      },
      err=>{
        console.log(err);
        this.alertLogin = true;
      }
    )
  }

  getUserByEmail(email:string){
    this.userServices.getUserByEmail(email).subscribe(
      res=>{
        this.userServices.userLogin = res;
        console.log(this.userServices.userLogin);
      },
      err=>{
        console.log(err);
      }
    )
  }

  register(){
    void this.router.navigateByUrl('register');
  }

  logOut(){
    this.loginCorrect=false;
    this.loginC=false;
    this.reservationServices.search.status=false;
    /*
    this.userServices.userLogin.name="";
    this.userServices.userLogin.lastname_p="";
    this.userServices.userLogin.lastname_m="";
    this.userServices.userLogin.dni=0;
    this.userServices.userLogin.email="";
    this.userServices.userLogin.card_number="";
    this.userServices.userLogin.phone=0;
    this.userServices.userLogin.password=""; */
  }
}
