import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Ingredients } from '../models/ingredients';
import { IngredientsService } from '../services/gestionStock/ingredients.service';
import {AjoutIngredientsService} from "../services/gestionStock/ajout-ingredients.service";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  ingreds: Ingredients | any;
  isShown: boolean = false;
  Show: boolean = false;
  // @ts-ignore
  //ingred: Action<DocumentSnapshot<Ingredients>>;


  constructor(public afs: AngularFirestore,private ajoutingrservice: AjoutIngredientsService) {}

  ngOnInit(): void {
    this.getAllingredients();
    //this.getIngredient();
    this.TotalStock(this.ingreds);
  }

  toggleShow1(){
    this.isShown = ! this.isShown;
  }
  toggleShow2(){
    this.Show = ! this.Show;
  }


  getAllingredients() : void {
    this.ajoutingrservice.getAll().snapshotChanges()
    .subscribe(data => {
      // @ts-ignore
      this.ingreds = data;
    });
  }
  /*getIngredient() : void{
    this.ajoutingrservice.getOne().snapshotChanges().subscribe(data => {
      this.ingred = data;
      console.log(this.ingred);
      console.log("Hello");
    });
  }*/

  TotalStock(ingred: Ingredients) : number {
    var total = 0
    for(var ing in this.ingreds){
      // @ts-ignore
      total += this.ingreds.prix;
    }
    return total;
  }

  deleteIngred(ingred : Ingredients){
    console.log("function called");
    this.ajoutingrservice.delete(ingred);
    console.log("function called 2");

  }
  Price(ingred : Ingredients){
    this.ajoutingrservice.getId();
  }

}
