import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user_email:string="";
  user_password:string="";

  constructor(private auth:AuthService){}

  onSubmit(){
    this.auth.login(this.user_email,this.user_password);
  }
  
}
