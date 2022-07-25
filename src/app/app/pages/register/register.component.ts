import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServices } from '../../core/services/user.services';
import { MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';

export interface DialogData{
  razon: 'Registro' | 'Actualizacion',
  patient: '';
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  passwordConfirm: string = '';
  alertDanger:boolean=false;

  constructor(
    public userServices:UserServices,
    public dialog: MatDialog,
    private router: Router
  ) { }
    
  addUser(Form:NgForm){

    if(Form.value.password===Form.value.passwordConfirm){
      console.log(Form.value);
      Form.value.status=true;
      this.userServices.createUser(Form.value).subscribe(
        res=>{
          console.log(res);
          this.dialog.open(DialogRegistroUser,{
            data:{
              razon: 'Registro',
              patient: Form.value.name+" "+Form.value.lastname_p+" "+Form.value.lastname_m,
            }
          });
          Form.reset();
        },
        err=>{
          console.log(err);
        }
      )
    }else{
      this.alertDanger=true;
    }

  }

  close(){
    void this.router.navigateByUrl('overview');
  }

  alertClose(){
    this.alertDanger=false;
  }
  ngOnInit(): void {
  }

}

@Component({
  selector: 'Dialog-registro-patient',
  templateUrl: './registerConfirm.component.html'
})
export class DialogRegistroUser{
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData){}
}

