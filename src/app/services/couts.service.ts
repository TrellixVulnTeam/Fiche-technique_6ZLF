import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Cout } from '../models/Couts/cout';

@Injectable({
  providedIn: 'root'
})
export class CoutsService {
  dbPath = '/Cout'
  coutRef : AngularFirestoreCollection<Cout>;


  constructor(private db: AngularFirestore) {
    this.coutRef = db.collection(this.dbPath);
  }
  create(cout: Cout){
    return this.db.collection(this.dbPath).add(cout)

  }
}
