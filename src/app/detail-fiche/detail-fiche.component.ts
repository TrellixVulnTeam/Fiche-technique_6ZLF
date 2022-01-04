import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-detail-fiche',
  templateUrl: './detail-fiche.component.html',
  styleUrls: ['./detail-fiche.component.css']
})
export class DetailFicheComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  printComponent(){
    window.print();
  }


}
