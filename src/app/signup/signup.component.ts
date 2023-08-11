import { Component, ElementRef } from '@angular/core';
import { AuthService } from '../shared/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private auth:AuthService){
  }
  user_email:string="";
  user_password:string="";
  fullname:string="";
  confirmpassword="";

  onSubmit(){
    this.auth.register(this.fullname,this.user_email,this.user_password);
  }
  passMatch(){
    return (this.user_password == this.confirmpassword);
  }
}
