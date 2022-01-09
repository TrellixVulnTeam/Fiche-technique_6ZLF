import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Ingredients } from 'src/app/models/ingredients';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  dbPath = '/ingredients'

  ingredRef : AngularFirestoreCollection<Ingredients>;

  constructor(private db: AngularFirestore) {
    this.ingredRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Ingredients> {
    console.log(this.ingredRef)
    return this.ingredRef;
  }

  getIngListe(){
    return this.ingredRef.snapshotChanges();
  }

  create(ingredient: Ingredients){
    return this.db.collection(this.dbPath).add({
      nom: ingredient.nom,
      categorie: ingredient.categorie,
      PU: ingredient.PU,
      unite: ingredient.unite,
      qtteStock : ingredient.qtteStock
      // allergene: ingredient.allergene
    });

  }

  update(id: string, data: any): Promise<void> {
    return this.ingredRef.doc(id).update(data);
  }

  delete(ingredient: Ingredients) {
    return this.ingredRef.doc(ingredient.idIngredient).delete();

  }

}
