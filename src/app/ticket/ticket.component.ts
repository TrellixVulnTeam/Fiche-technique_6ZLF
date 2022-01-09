import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fiche } from '../models/fiche';
import { FicheService } from '../services/ficheServices/fiche.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  @Input() fiche?: Fiche;


  id !: string |null;

  constructor(private route: ActivatedRoute,private ficheService :FicheService) {
    this.id = this.route.snapshot.paramMap.get('idticket')
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
