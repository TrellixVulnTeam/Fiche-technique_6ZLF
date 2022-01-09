import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { CategorieIngredient } from 'src/app/models/Categorie/categorie-ingredient';

@Injectable({
  providedIn: 'root'
})
export class CateAllergeneService {

  dbPath = '/CategorieAllergene'

  categoriesRef !: AngularFirestoreCollection<CategorieIngredient>

  constructor(private db: AngularFirestore) {
    this.categoriesRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<CategorieIngredient> {
    return this.categoriesRef;
  }

  getCategorieListe(){
    return this.categoriesRef.snapshotChanges();
  }}
