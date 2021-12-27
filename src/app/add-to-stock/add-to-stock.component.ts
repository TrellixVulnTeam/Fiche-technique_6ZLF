import { Component, OnInit } from '@angular/core';
import { AjoutIngredientsService } from "../services/gestionStock/ajout-ingredients.service";
import {FormGroup, Validators} from "@angular/forms";
import { FormBuilder } from '@angular/forms';
import {Ingredients} from "../models/ingredients";

@Component({
  selector: 'app-add-to-stock',
  templateUrl: './add-to-stock.component.html',
  styleUrls: ['./add-to-stock.component.css']
})
export class AddToStockComponent implements OnInit {

  stockForm: FormGroup = new FormGroup({});
  ingredients : Ingredients = new Ingredients();

  constructor(public ajoutingredientservice: AjoutIngredientsService, private formBuilder: FormBuilder) {

  }
  ngOnInit(): void {
    this.stockForm = this.formBuilder.group({
      ingredient: ['', Validators.required],
      categorie: ['', Validators.required],
      prix: ['', Validators.required],
      quantite: ['', Validators.required],
      unite: ['', Validators.required]
    });
  }
  valider(){
    console.log(this.ingredients);
    this.ajoutingredientservice.create(this.ingredients).then(() => {
      console.log('Created new ingredients successfully!');
    });

  }


}
