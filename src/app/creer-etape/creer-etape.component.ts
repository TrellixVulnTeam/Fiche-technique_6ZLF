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

  listIng : Ingredients[]=[];

  EtapeForm!: FormGroup;
  Ingredients?: FormArray;
  etapes : FormArray = new FormArray([]);


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
      titreEtape : ['', Validators.required],
      NomDenree: ['', Validators.required],
      Ingredients: this.formBuilder.array([ 
        this.creerIngredient() 
      ]),
      description: ['', Validators.required],
      temps: ['', Validators.required]
    });
  }

  creerIngredient(){
    return this.formBuilder.group({
      ingredient: ['', Validators.required],
      quantite: ['', Validators.required]
    });
  }

  addIngredient(): void {
    this.ingredients.push(this.creerIngredient());
    this.etapeService.update(this.EtapeForm.value.idEtape,this.EtapeForm.get('Ingredients')?.value)
  }

  get ingredients() {
    return this.EtapeForm.controls["Ingredients"] as FormArray;
  }

  // Valider la création de l'étape
  valider(){
    console.log(this.EtapeForm.value)
    this.etapeService.create(this.EtapeForm.value).then(() => {
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
