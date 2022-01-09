import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  id !: string |null;

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('idticket')
  }

  ngOnInit(): void {
  }

}
