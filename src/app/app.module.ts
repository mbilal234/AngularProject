import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AngularFireModule} from "@angular/fire/compat"
import { provideFirebaseApp } from '@angular/fire/app';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
//import {AngularFireAuthModule} from '@angular/fire';
import { FormsModule } from '@angular/forms';
import { getDatabase } from 'firebase/database';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBfDeFvM0CnF4whMXPDidnCWplIOIx6gkQ",
      authDomain: "dashboard-project-b6496.firebaseapp.com",
      databaseURL:"https://dashboard-project-b6496-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "dashboard-project-b6496",
      storageBucket: "dashboard-project-b6496.appspot.com",
      messagingSenderId: "614173531824",
      appId: "1:614173531824:web:d950bf7140bf0a073a2575",
      measurementId: "G-LWGW3Q7FH0"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
