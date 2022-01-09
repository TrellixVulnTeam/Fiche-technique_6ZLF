import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { CategorieIngredient } from '../models/Categorie/categorie-ingredient';

@Injectable({
  providedIn: 'root'
})
export class TypeIngredientsService {
  dbPath = '/CategorieIngredient'
  catRef : AngularFirestoreCollection<CategorieIngredient>;


  constructor(private db: AngularFirestore) {
    this.catRef = db.collection(this.dbPath);
  }
  getAll(): AngularFirestoreCollection<CategorieIngredient> {
    return this.catRef;
  }
}
