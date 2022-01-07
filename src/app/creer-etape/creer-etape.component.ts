import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Etape } from '../models/etape';
import { Ingredients } from '../models/ingredients';
import { ModelIngredFiche } from '../models/model-ingred-fiche';
import { IngredientsService } from '../services/gestionStock/ingredients.service';

@Component({
  selector: 'app-creer-etape',
  templateUrl: './creer-etape.component.html',
  styleUrls: ['./creer-etape.component.css']
})
export class CreerEtapeComponent implements OnInit {

  etape_fiche : Etape = new Etape();

  listIng : Ingredients[]=[];

  @Output() etape : EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  EtapeForm!: FormGroup;
  Ingredients?: FormArray;
  etapes : FormArray = new FormArray([]);

  cpt : number = 1;
  selected !: String;

  constructor(private router: Router,private formBuilder: FormBuilder,private ingredientService : IngredientsService ) { 
    this.getListeIngredient()
  }

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
      ingredient: ['', Validators.required],
      quantite: ['', Validators.required]
    });
  }

  addIngredient(): void {
    this.Ingredients = this.EtapeForm.get('Ingredients') as FormArray;
    this.Ingredients.push(this.creerIngredient());
  }

  get ingredients() {
    return this.EtapeForm.controls["Ingredients"] as FormArray;
  }

  //Emit l'Etape dans le cas où je ne veut pas ajouter une autre étape
  valider(Etapes: FormGroup){
    console.log(this.EtapeForm.value);
    this.etape.emit(Etapes);
  }

  //Emit et ajouter pour une autre étape
  onSelect(Etapes: FormGroup){
    this.etape.emit(Etapes);
    this.cpt ++
    this.EtapeForm.reset();
    (this.EtapeForm.get('Ingredients') as FormArray).removeAt(0)
  }

  getListeIngredient(){
    this.ingredientService.getIngListe().subscribe(res =>{
      this.listIng = res.map(e => {
        return {
          idIngredient: e.payload.doc.id, ...e.payload.doc.data() as {}
        } as Ingredients;
      })
    });
    console.log(this.listIng)
  }

}
