import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import {Ingredients} from "../../models/ingredients";
import { Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AjoutIngredientsService {
  dbPath = '/Stock'

  ingredRef : AngularFirestoreCollection<Ingredients>;

  constructor(private db: AngularFirestore ) {
    this.ingredRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Ingredients> {
    return this.ingredRef;
  }
  delete(ingredient: Ingredients){

  }
  create(ingredient: Ingredients){
    return this.db.collection(this.dbPath).add({
      ingredient: ingredient.ingredient,
      categorie: ingredient.categorie,
      prix: ingredient.prix,
      quantite: ingredient.quantite,
      unite: ingredient.unite,
      //allergene: ingredient.allergene
    });


  }
}
