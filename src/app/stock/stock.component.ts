import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Ingredients } from '../models/ingredients';
import { IngredientsService } from '../services/gestionStock/ingredients.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  ingreds: any;

  constructor(public afAuth: AngularFireAuth,private ingredService :IngredientsService) { }

  ngOnInit(): void {
    this.getingredients()
    this.TotalStock()
  }


  getingredients() : void {
    this.ingredService.getAll().snapshotChanges()
    .subscribe(data => {
      this.ingreds = data;
    });
  }


  TotalStock() : number {
    var total = 0
    for(var ing in this.ingreds){
      total += 1
    }
    return total;
  }

  deleteIngred(ingred : Ingredients){
    console.log("function called");
    console.log(ingred);
    return this.ingredService.delete(ingred);
  }

}
