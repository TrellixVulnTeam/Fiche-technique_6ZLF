import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-details-fiche-couts',
  templateUrl: './details-fiche-couts.component.html',
  styleUrls: ['./details-fiche-couts.component.css']
})
export class DetailsFicheCoutsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
