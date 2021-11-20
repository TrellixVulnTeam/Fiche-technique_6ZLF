import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creer-fiche',
  templateUrl: './creer-fiche.component.html',
  styleUrls: ['./creer-fiche.component.css']
})
export class CreerFicheComponent implements OnInit {
  
  constructor(private router: Router) { }

  isShown: boolean = false;
  
  ngOnInit(): void {
  }

  toggleShow(){
    this.isShown = ! this.isShown;
  }


}
