import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import {Ingredients} from "../../models/ingredients";
import { Observable} from "rxjs";
import {StockComponent} from "../../stock/stock.component";
import {docData} from "rxfire/firestore";
import { doc, getDoc} from "firebase/firestore"
import {Fiche} from "../../models/fiche";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AjoutIngredientsService {
  dbPath = '/Stock'

  ingredRef : AngularFirestoreCollection<Ingredients>;
  ingredient: null | Ingredients;
  // @ts-ignore
  ingredDoc: AngularFirestoreDocument<Ingredients>;



  constructor(private db: AngularFirestore ) {
    this.ingredRef = db.collection(this.dbPath);
    this.ingredient = null;
    this.ingredDoc = db.collection('Stock').doc();

  }

  /*ngOnInit(){
    this.ingredient = this.db.collection('dbPath').doc('cerise').valueChanges();
  }*/

  getAll(): AngularFirestoreCollection<Ingredients> {
    return this.ingredRef;
  }
  getOne() : AngularFirestoreDocument<Ingredients>{
    return this.ingredDoc;

  }
  update(id: string, data: any): Promise<void> {
    return this.ingredRef.doc(id).update(data);
  }
  delete(data: Ingredients){

    // @ts-ignore
    console.log(this.db.collection("Stock").doc(data.payload.doc.id))
    // @ts-ignore
    return this.db.collection("Stock").doc(data.payload.doc.id).delete();
  }
  getPrix(){

  }
  getId(){
    return this.ingredRef.snapshotChanges().pipe(map(actions =>{
      return actions.map( a => {
        const data = a.payload.doc.data() as Ingredients;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
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
