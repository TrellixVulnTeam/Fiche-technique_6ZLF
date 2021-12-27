import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Ingredients } from 'src/app/models/ingredients';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  dbPath = '/Ingredients'

  ingredRef : AngularFirestoreCollection<Ingredients>;

  constructor(private db: AngularFirestore) {
    this.ingredRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Ingredients> {
    return this.ingredRef;
  }

  create(ingredient: Ingredients){
    return this.db.collection(this.dbPath).add({
      ingredient: ingredient.ingredient,
      categorie: ingredient.categorie,
      Prix: ingredient.prix,
      unite: ingredient.unite,
      quantite: ingredient.quantite
    });

  }

  update(id: string, data: any): Promise<void> {
    return this.ingredRef.doc(id).update(data);
  }

  delete(ingredient: Ingredients) {
    return this.db
        .collection(this.dbPath)
        .doc(ingredient.ingredient)
        .delete();

  }

  // delete(id: string): Promise<void> {
  //   return this.db.doc(id).delete();
  // }

}
