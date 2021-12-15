import { Component, OnInit } from '@angular/core';
import {IngredientsService} from "../services/ingredients.service";


@Component({
  selector: 'app-ingredient-component',
  templateUrl: './ingredient-component.component.html',
  styleUrls: ['./ingredient-component.component.css']
})
export class IngredientComponentComponent implements OnInit {

  constructor(public ingredientService: IngredientsService) { }

  ngOnInit(){
    this.ingredientService.log('premier message');
  }

}
