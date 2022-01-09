import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Etape } from 'src/app/models/etape';

@Injectable({
  providedIn: 'root'
})
export class EtapesService {

  dbPath = '/Etape'

  etapesRef : AngularFirestoreCollection<Etape>;
  id : any

  etape !: Observable<Etape>

  constructor(private db: AngularFirestore) {
    this.etapesRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Etape> {
    return this.etapesRef;
  }

  getEtapeListe(){
    return this.etapesRef.snapshotChanges();
  }

  getID(etape : Etape){
    return this.etapesRef.valueChanges({idField: 'idFiche'})
  }

  getEtapeByID(id :any) {
    //@ts-ignore
    this.etape = this.fichesRef.doc(id).valueChanges();
    return this.etape;
  }

  create(etape: Etape){
    return this.db.collection(this.dbPath).add({
      NomDenree: etape.NomDenree,
      ingredients: etape.ingred,
      titreEtape: etape.titreEtape,
      description: etape.description,
      temps : etape.temps
    });

  }

  update(id: string, data: any): Promise<void> {
    return this.etapesRef.doc(id).update(data);
  }

  delete(etape: Etape){
    return this.etapesRef.doc(etape.idEtape).delete();
  }
  
}
