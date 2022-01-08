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
  lisIngredients: ModelIngredFiche[] =[];

  listIng : Ingredients[]=[];

  @Output() etape : EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  EtapeForm!: FormGroup;
  Ingredients?: FormArray;
  etapes : FormArray = new FormArray([]);

  cpt : number = 1;
  selected !: String;

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
    //Ajouter l
    let x = this.EtapeForm.get('Ingredients')?.get('ingredient')?.value;
    console.log(x)
  }

  get ingredients() {
    return this.EtapeForm.controls["Ingredients"] as FormArray;
  }

  //Emit l'Etape dans le cas où je ne veut pas ajouter une autre étape

  // Valider la création de l'étape
  valider(){
    this.etapeService.create(this.etape_fiche).then(() => {
      return alert('Etape ajoutée avec succès!');
    });

    // console.log(this.EtapeForm.value);
    // this.etape.emit(Etapes);
    console.log(this.ingredients_etape)
    console.log(this.etape_fiche)
    
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
