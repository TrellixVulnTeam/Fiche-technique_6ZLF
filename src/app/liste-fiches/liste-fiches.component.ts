import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
<<<<<<< HEAD
=======
import { AngularFireAuth } from "@angular/fire/compat/auth";
>>>>>>> nour

@Component({
  selector: 'app-liste-fiches',
  templateUrl: './liste-fiches.component.html',
  styleUrls: ['./liste-fiches.component.css']
})
export class ListeFichesComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }
=======
  constructor(public afAuth: AngularFireAuth) { }
>>>>>>> nour

  ngOnInit(): void {
  }

<<<<<<< HEAD
=======
  logout(): void {
    this.afAuth.signOut();
}

>>>>>>> nour
}
