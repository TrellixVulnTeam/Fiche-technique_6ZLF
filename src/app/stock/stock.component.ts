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

  searchText!: any;

  //Tableau des ingrédients récupérée  
  ingreds : Ingredients[] = [];
  isShown: boolean = false;

  constructor(public afAuth: AngularFireAuth,private ingredService :IngredientsService) { }

  ngOnInit(): void {
    this.getingredients()
    this.TotalStock()
  }


  getingredients() : void {
    this.ingredService.getAll().snapshotChanges()
    this.ingredService.getIngListe().subscribe(res =>{
      this.ingreds = res.map(e => {
        return {
          idIngredient: e.payload.doc.id, ...e.payload.doc.data() as {}
        } as Ingredients;
      })
    });
  }


  TotalStock() : number {
    var total = 0
    for(var ing of this.ingreds){
      let prixUnitaire = +ing.PU
      let quantité = +ing.qtteStock
      total += prixUnitaire * quantité
    }
    return total;
  }

  deleteIngred(ingred : Ingredients){
    return this.ingredService.delete(ingred);
  }


  toggleShow1(){
    this.isShown = ! this.isShown;
  }

}
