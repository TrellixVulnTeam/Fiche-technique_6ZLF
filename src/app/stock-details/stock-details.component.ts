import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Ingredients} from "../models/ingredients";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AjoutIngredientsService} from "../services/gestionStock/ajout-ingredients.service";

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {

  ingredientModifieForm: FormGroup = new FormGroup({});
  ingredients : Ingredients = new Ingredients();


  constructor(private formBuilder: FormBuilder, private ajoutIngredientService: AjoutIngredientsService) { }
  ngOnInit(): void {
    this.ingredientModifieForm = this.formBuilder.group({
      ingredient: ['', Validators.required],
      categorie: ['', Validators.required],
      prix: ['', Validators.required],
      quantite: ['', Validators.required],
      unite: ['', Validators.required]
    });
  }
  valid(): void{

  }

  ngOnChanges(){
    this.ingredientModifieForm = this.formBuilder.group({
      name: ['', Validators.required]

    });

  }
  updateIngred(): void {
    }


  }
