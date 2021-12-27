import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Etape } from '../models/etape';

@Component({
  selector: 'app-creer-etape',
  templateUrl: './creer-etape.component.html',
  styleUrls: ['./creer-etape.component.css']
})
export class CreerEtapeComponent implements OnInit {

  @Input() etape : Etape | null = null;

  EtapeForm!: FormGroup;
  Ingredients?: FormArray;
  Quantite?: FormArray;

  cpt : number = 1;


  constructor(private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.setFormulaire();
  }

  setFormulaire(){
    this.EtapeForm = this.formBuilder.group({
      NomDenree: ['', Validators.required],
      Ingredients: this.formBuilder.array([ this.creerIngredient() ]),
      Description: ['', Validators.required],
      Temps: ['', Validators.required]
    });
  }

  creerIngredient(){
    return this.formBuilder.group({
      NomIngr: ['', Validators.required],
      qtt: ['', Validators.required]
    });
  }

  addIngredient(): void {
    this.Ingredients = this.EtapeForm.get('Ingredients') as FormArray;
    this.Ingredients.push(this.creerIngredient());
  }

  get ingredients() {
    return this.EtapeForm.controls["Ingredients"] as FormArray;
  }

  Enregistrer(){
    this.cpt ++
    this.EtapeForm.patchValue({
      'NumEtape':this.cpt,
      'NomEtape':this.EtapeForm.get('Nom')?.value,
      'ingredient': this.EtapeForm.get('Ingredients')?.value as FormArray,
      'Quantite':this.EtapeForm.get('Quantite')?.value,
      'description':this.EtapeForm.get('Description')?.value,
      'Temps' : this.EtapeForm.get('Temps')?.value
    });

  }

}
