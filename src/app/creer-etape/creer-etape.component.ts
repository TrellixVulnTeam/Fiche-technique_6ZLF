import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-creer-etape',
  templateUrl: './creer-etape.component.html',
  styleUrls: ['./creer-etape.component.css']
})
export class CreerEtapeComponent implements OnInit {
  etapeForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.etapeForm = this.formBuilder.group({
      EnsembleIngredient: ['', Validators.required],
      Quantite: ['', Validators.required]


    });
  }
  Show(){
    console.log(this.etapeForm.get('EnsembleIngredient')?.value)
    console.log(this.etapeForm.get('Quantite')?.value)
  }

}
