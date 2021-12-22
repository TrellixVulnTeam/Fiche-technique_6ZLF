import { Injectable } from '@angular/core';
import { Fiche } from "../../models/fiche";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})

export class FicheService {

  dbPath = '/Fiche'

  fichesRef : AngularFirestoreCollection<Fiche>;

  constructor(private db: AngularFirestore) {
    this.fichesRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Fiche> {
    return this.fichesRef;
  }

  create(fiche: Fiche){
    // return this.fichesRef.add(fiche);
    return this.db.collection('Fiche').add({
      intitule: fiche.intitule,
      responsable: fiche.responsable,
      nbrCouverts: fiche.nbrCouverts,
      categorie: fiche.categorie
    });

  }

  update(id: string, data: any): Promise<void> {
    return this.fichesRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.fichesRef.doc(id).delete();
  }

}
