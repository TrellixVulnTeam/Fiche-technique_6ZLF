import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import { Fiche } from '../models/fiche';
import { FicheService } from '../services/ficheServices/fiche.service';

@Component({
  selector: 'app-details-fiche-couts',
  templateUrl: './details-fiche-couts.component.html',
  styleUrls: ['./details-fiche-couts.component.css']
})
export class DetailsFicheCoutsComponent implements OnInit {

  @Input() fiche?: Fiche;

  id !: string | null;
  ficheSansCouts !: string |null;

  constructor(private router: Router,private route: ActivatedRoute,private ficheService :FicheService) {
    this.id = this.route.snapshot.paramMap.get('id')
    this.ficheSansCouts = '/details-fiche'+'/'+this.id

  }

  ngOnInit(): void {
    this.ficheService.getFicheByID(this.id).subscribe(res =>{
      this.fiche = res;
      console.log(res)
    })
  }

  printComponent(){
    window.print();
  }

}


