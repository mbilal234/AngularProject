import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private auth:AuthService,private route: ActivatedRoute){}
  views=[["Product Views", "622,468"], ["Application", "42,635"],["Followers", "8,099"],["Following", "69"]];
  email:string|null="";
  name:string|null="";
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.email = params.get('email');
      this.name = params.get('name');
    });
  }

  logout(){
    this.auth.logout();
  }
}
