import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedIn !: boolean;
  
  constructor(private AccountAuth: AuthService, private router: Router) {
    // this.loggedIn = false;
  }
   
  ngOnInit() {
    this.loggedIn = this.AccountAuth.isLoggedIn();
  }

  isLoggedIn() : boolean {
    return this.loggedIn;
  }
  
 
}
