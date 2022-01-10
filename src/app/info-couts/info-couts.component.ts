import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { Cout } from '../models/Couts/cout';
import { CoutsService } from '../services/couts.service';

@Component({
  selector: 'app-info-couts',
  templateUrl: './info-couts.component.html',
  styleUrls: ['./info-couts.component.css']
})
export class InfoCoutsComponent implements OnInit {

  coutForm: FormGroup = new FormGroup({});
  couts: Cout = new Cout();

  clicked = false;
  list : Cout[]=[]

  constructor(private formBuilder: FormBuilder, public coutService: CoutsService, public afs: AngularFirestore) {
    // if(this.list.length >= 1){
    //   this.clicked = ! this.clicked
    // }
  }

  ngOnInit(): void {
    this.coutForm = this.formBuilder.group({
      coutPersonnel: ['', Validators.required],
      coutFluide: ['', Validators.required],
      coefficient: ['', Validators.required],
      coutAssaisonnement : [''],
    });
      // this.getListeCouts();

  }

  getListeCouts(){
    this.coutService.getListeCouts().subscribe(res =>{
      this.list = res.map(e => {
        return {
          idCout: e.payload.doc.id, ...e.payload.doc.data() as {}
        } as Cout;
      })
    });
  }

  valider(){
    this.coutService.create(this.coutForm.value).then(() => {
      console.log('Created cout successfully!');
      return alert('Bases des couts ajoutés avec succès!')
    });
  }

  update(){
    // this.coutService.updateCouts(this.coutForm.value.id,this.coutForm.value);
    this.getListeCouts();
    for(let x of this.list){
      this.coutService.delete(x);
    }
    this.valider();
  }

}
