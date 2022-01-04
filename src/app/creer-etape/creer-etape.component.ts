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

  etape_fiche : Etape = new Etape();

  @Output() etape : EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  EtapeForm!: FormGroup;
  Ingredients?: FormArray;
  etapes : FormArray = new FormArray([]);

  cpt : number = 1;

  constructor(private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.setFormulaire();
  }

  setFormulaire(){
    this.EtapeForm = this.formBuilder.group({
      numEtape: this.cpt,
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

  valider(Etapes: FormGroup){
    console.log(this.etape_fiche);
    this.etape.emit(Etapes);
  }

  onSelect(Etapes: FormGroup){
    this.etape.emit(Etapes);
    this.cpt ++
    this.etape_fiche = new Etape();
    this.EtapeForm.reset();
    (this.EtapeForm.get('Ingredients') as FormArray).removeAt(0)
  }

}
