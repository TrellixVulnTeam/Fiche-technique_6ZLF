import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup} from "@angular/forms";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-creer-fiche',
  templateUrl: './creer-fiche.component.html',
  styleUrls: ['./creer-fiche.component.css']
})
export class CreerFicheComponent implements OnInit {



  // @ts-ignore
  ficheForm: FormGroup = new FormGroup({});
  constructor(private router: Router, private formBuilder: FormBuilder) {}

  isShown: boolean = false;

  ngOnInit(): void {
    this.ficheForm = this.formBuilder.group({
      Intitule: ['', Validators.required]

    });



  }


  toggleShow(){
    this.isShown = ! this.isShown;
  }
  Show(){
    console.log(this.ficheForm.get('Intitule')?.value)
  }


}
