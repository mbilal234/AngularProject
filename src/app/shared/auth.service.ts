import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { getDatabase, ref, set,get,child } from "firebase/database";
import {Router} from '@angular/router';
@Injectable({

    providedIn:'root'
})
export class AuthService {
    constructor(private fireauth:AngularFireAuth, private router:Router){}

    async login(email: string, password: string) {
        try {
          await this.fireauth.signInWithEmailAndPassword(email, password);
          localStorage.setItem('token', 'true');
          const userEmailEncoded = email.replace('.', '_');
          const userData = await this.readUserData(userEmailEncoded);
          const [userEmail, userName] = userData;
          this.router.navigate(['dashboard',userName,userEmail]);
        } catch(FirebaseError) {
          alert('Credentials are invalid');
          this.router.navigate(['login']);
        }
      }

    register(name:string, email: string, password: string){
        this.fireauth.createUserWithEmailAndPassword(email,password).then(()=>{
            const userEmailEncoded = email.replace('.', '_');
            this.writeUserData(userEmailEncoded, name, email);
            this.router.navigate(['dashboard',name,email]);
            alert('Registration successful');
        }, err => {
            alert('Error occured');
            this.router.navigate(['register']);
        })
    }

    logout(){
        this.fireauth.signOut().then(()=>{
            localStorage.removeItem('token');
            this.router.navigate(['login']);
        }, err => {
            alert('Error occured');
        })
    }

    writeUserData(userId:string, name: string, email:string) {
        const db = getDatabase();
        set(ref(db, 'users/' + userId), {
          name: name,
          email: email
        });
      }

      async readUserData(userId: string) {
        try {
          const dbRef = ref(getDatabase());
          const snapshot = await get(child(dbRef, `users/${userId}`));
          if (snapshot.exists()) {
            console.log(snapshot.val());
            const email = snapshot.val().email;
            const name = snapshot.val().name;
            return [email, name];
          } else {
            console.log('No data available');
            return [];
          }
        } catch (error) {
          console.error(error);
          return [];
        }
      }
}