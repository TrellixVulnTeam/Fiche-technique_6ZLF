import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { CategorieIngredient } from 'src/app/models/Categorie/categorie-ingredient';

@Injectable({
  providedIn: 'root'
})
export class CategorieIngredientService {

  dbPath = '/CatgrIngred'

  categoriesIgRef !: AngularFirestoreCollection<CategorieIngredient>

  constructor(private db: AngularFirestore) {
    this.categoriesIgRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<CategorieIngredient> {
    return this.categoriesIgRef;
  }

  getCategorieListe(){
    return this.categoriesIgRef.snapshotChanges();
  }
  
}
