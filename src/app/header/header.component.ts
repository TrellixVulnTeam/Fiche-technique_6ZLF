import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public loggedIn = false;
  

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
    this.loggedIn = !!sessionStorage.getItem('user');
  }
   
  ngOnInit() {
  }

  isLoggedIn() {

    return this.loggedIn;
  }
  
 
}
