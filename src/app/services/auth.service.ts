import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private userLoggedIn: boolean = false;

  constructor(private router: Router, private afAuth: AngularFireAuth) {
    // this.userLoggedIn = false;
    // console.log("1 "+this.userLoggedIn)

    // this.afAuth.onAuthStateChanged((user) => { 
    //   if (user) {
    //     this.userLoggedIn = true;
    //   } else {
    //     this.userLoggedIn = false;
    //   }
    //   console.log(this.userLoggedIn)
    // });

    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        console.log('user is logged in');
        this.userLoggedIn = true;
      } else {
        this.userLoggedIn = false;
        console.log('user not logged in');
      }
    });

  }

  loginUser(email: string, password: string): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then(() => {
      console.log('Auth Service: loginUser: success');
      this.router.navigate(['/Fiches']);
    })
    .catch(error => {
      console.log('Auth Service: login error...');
      console.log('error code', error.code);
      console.log('error', error);
      // if (error.code)
      //   return { isValid: false, message: error.message };
    });
  }

  //Signup function modified !
  signUpUser(email: string, password: string){
    return new Promise<void>(
      (resolve,reject) => {
        this.afAuth.createUserWithEmailAndPassword(email, password).then(
          () => {
            console.log("Compte créé");
            resolve();
          }
        ).catch(
          error => {
            reject(error);
          }
        )
      }
    );
  }

  public isLoggedIn(): boolean {
    return this.userLoggedIn;
  }

}
