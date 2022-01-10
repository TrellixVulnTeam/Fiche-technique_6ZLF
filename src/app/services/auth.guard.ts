import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private router: Router, private afAuth: AngularFireAuth) {

  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise(
      (resolve,reject)=>{
        this.afAuth.onAuthStateChanged(
          (user)=>{
            if(user){
              resolve(true);
            }else{
              this.router.navigate(['/login']);
              resolve(false);
            }
          }
        );
      }
    );
  }
  
}
