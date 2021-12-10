import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

>>>>>>> nour

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit(): void {
  }

=======
  public loggedIn = false;
  

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
    this.loggedIn = !!sessionStorage.getItem('user');
  }
   
  ngOnInit() {
  }

  isLoggedIn() {

    return this.loggedIn;
  }
  
 
>>>>>>> nour
}
