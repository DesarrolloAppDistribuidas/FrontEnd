import { Component, OnInit } from '@angular/core';
import { Reservation } from '../../core/models/reservations';
import { ReservationServices } from '../../core/services/reservation.services';
import { UserServices } from '../../core/services/user.services';
import { Router } from '@angular/router';
import { AuthServices } from '../../core/services/auth.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})



export class OverviewComponent implements OnInit {
  date = Date();
  alertLogin: boolean=false;
  loginCorrect: boolean=false;
  loginC:boolean=false;
  hide=true;

  constructor(public reservationServices: ReservationServices,
    private router: Router,
    public authServices: AuthServices,
    public userServices:UserServices,
    ) { }

  ngOnInit(): void {
  }
  mostrar(Form : NgForm){
    console.log(Form.value);
    
    if(this.loginC){
      this.reservationServices.search.email=this.userServices.userLogin.email;
      this.reservationServices.search.status=true;
    }
    console.log(this.reservationServices.search);
    if(this.reservationServices.search.date_in){
      void this.router.navigateByUrl('reservation');
    }
  }

  register(){
    void this.router.navigateByUrl('register');
  }

  login(Form: NgForm){
    this.authServices.login(Form.value).subscribe(
      res=>{
        console.log(res);
        this.loginCorrect=true;
        this.loginC=true;
        this.getUserByEmail(Form.value.email);
      },
      err=>{
        console.log(err);
        this.alertLogin = true;
      }
    )
  }

  alertClose(){
    this.alertLogin = false;
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

  logOut(){
    this.loginCorrect=false;
    this.loginC=false;
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

