import { Injectable } from '@angular/core';
import { Fiche } from "../../models/fiche";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FicheService {

  dbPath = '/Fiche'

  fichesRef : AngularFirestoreCollection<Fiche>;
  id : any

  fiche !: Observable<Fiche>

  constructor(private db: AngularFirestore) {
    this.fichesRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Fiche> {
    return this.fichesRef;
  }

  getFicheListe(){
    return this.fichesRef.snapshotChanges();
  }

  getID(fiche : Fiche){
    return this.fichesRef.valueChanges({idField: 'idFiche'})
  }

  getFicheByID(id :any) {
    //@ts-ignore
    this.fiche = this.fichesRef.doc(id).valueChanges();
    return this.fiche;
  }

  create(fiche: Fiche){
    return this.db.collection(this.dbPath).add({
      intitule: fiche.intitule,
      responsable: fiche.responsable,
      nbrCouverts: fiche.nbrCouverts,
      categorie: fiche.categorie,
      etapes : fiche.etape
    });

  }

  update(id: string, data: any): Promise<void> {
    return this.fichesRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.fichesRef.doc(id).delete();
  }

}
