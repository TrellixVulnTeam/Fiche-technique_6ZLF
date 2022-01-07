import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { CategorieFiche } from 'src/app/models/Categorie/categorie-fiche';

@Injectable({
  providedIn: 'root'
})
export class CategorieFicheService {

  dbPath = '/CategorieFiche'

  categoriesRef !: AngularFirestoreCollection<CategorieFiche>

  constructor(private db: AngularFirestore) {
    this.categoriesRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<CategorieFiche> {
    return this.categoriesRef;
  }

}
