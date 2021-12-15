import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  ingredients: string[] = [];
  constructor() { }
  log(ingredient: string){
    this.ingredients.push(ingredient);
  }
  clear(){
    this.ingredients = [];
  }
}
