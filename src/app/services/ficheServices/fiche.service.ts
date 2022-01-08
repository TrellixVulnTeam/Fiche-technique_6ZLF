import { Injectable } from '@angular/core';
import { Fiche } from "../../models/fiche";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Etape } from 'src/app/models/etape';

@Injectable({
  providedIn: 'root'
})

export class FicheService {

  dbPath = '/Fiche'

  fichesRef : AngularFirestoreCollection<Fiche>;
  id : any

  fiche !: Observable<Fiche>

  constructor(private db: AngularFirestore,private router: Router) {
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
    return this.db.collection(this.dbPath).add(fiche).then(res => {
      this.router.navigate(['liste-etapes',res.id]);
    })
  }

  update(id: string, data: any): Promise<void> {
    return this.fichesRef.doc(id).update(data);
  }

  delete(fiche: Fiche){
    return this.fichesRef.doc(fiche.idFiche).delete();
  }

  updateEtapes(id : string | null ,listeEtapes : Etape[] ){
    this.fichesRef.doc(id!).update({etape : listeEtapes})
  }

}
