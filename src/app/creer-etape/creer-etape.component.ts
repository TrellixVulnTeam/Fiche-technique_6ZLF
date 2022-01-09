import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Etape } from '../models/etape';
import { Ingredients } from '../models/ingredients';
import { ModelIngredFiche } from '../models/model-ingred-fiche';
import { EtapesService } from '../services/Etapes/etapes.service';
import { IngredientsService } from '../services/gestionStock/ingredients.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-creer-etape',
  templateUrl: './creer-etape.component.html',
  styleUrls: ['./creer-etape.component.css']
})
export class CreerEtapeComponent implements OnInit {

  etape_fiche : Etape = new Etape();

  // Ensemble des ingrédients utilisés dans une étape
  ingredients_etape : ModelIngredFiche = new ModelIngredFiche();

  listIng : Ingredients[]=[];

  EtapeForm!: FormGroup;
  Ingredients?: FormArray;
  etapes : FormArray = new FormArray([]);

  //Tableau des étapes récupérée  
  ingreds : ModelIngredFiche[] = [];

  constructor(private router: Router,private formBuilder: FormBuilder,
    private ingredientService : IngredientsService,
    private etapeService : EtapesService ) { 
    this.getListeIngredient()
  }

  ngOnInit(): void {
    this.setFormulaire();
  }

  setFormulaire(){
    this.EtapeForm = this.formBuilder.group({
      nomEtape : ['', Validators.required],
      NomDenree: ['', Validators.required],
      Ingredients: this.formBuilder.array([ 
        this.creerIngredient() 
      ]),
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
    console.log(this.ingredients.value)
  }

  get ingredients() {
    return this.EtapeForm.controls["Ingredients"] as FormArray;
  }

  // Valider la création de l'étape
  valider(){
    console.log(this.EtapeForm.value)
    this.etapeService.create(this.etape_fiche).then(() => {
      return alert('Etape ajoutée avec succès!');
    });
    
  }

  //Pour lister les ingrédients dans le togle down
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
