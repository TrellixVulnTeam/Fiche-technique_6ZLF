import { Injectable } from '@angular/core';
import { Fiche } from "../../models/fiche";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import {map} from 'rxjs/operators';
import{ Observable} from "rxjs";
import {orderBy, where} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})

export class FicheService {

  dbPath = '/Fiche'

  fichesRef : AngularFirestoreCollection<Fiche>;

  constructor(private db: AngularFirestore) {
    this.fichesRef = db.collection(this.dbPath);
  }
  filter(){

  }

  getAll(): AngularFirestoreCollection<Fiche> {
    return this.fichesRef;
  }
  getAllDocs(){
    const ref = this.db.collection(this.dbPath);
    return ref.valueChanges({idField: 'categorie'});
    //this adds the id of the doc on the object with a specified key
  }
  getId(fiche : Fiche){
    return this.fichesRef.snapshotChanges().pipe(map(actions =>{
      return actions.map( a => {
        const data = a.payload.doc.data() as Fiche;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  create(fiche: Fiche){
    return this.db.collection(this.dbPath).add({
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
