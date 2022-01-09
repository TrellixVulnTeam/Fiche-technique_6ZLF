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

  // @ts-ignore
  selectedCat: Categorie;
  // @ts-ignore
  printedCat: Categorie;

  constructor(private formBuilder: FormBuilder, public coutService: CoutsService, public afs: AngularFirestore) {
  }

  ngOnInit(): void {
    this.coutForm = this.formBuilder.group({
      coutPersonnel: ['', Validators.required],
      coutFluide: ['', Validators.required],
      coefficient: ['', Validators.required],
      coutAssaisonnement : [''],
      selectedCat: ['', Validators.required],
    });
  }


  valider(){
    this.coutService.create(this.coutForm.value).then(() => {
      console.log('Created cout successfully!');
      return alert('Bases des couts ajoutés avec succès!')
    });
  }

  print(){
    this.printedCat = this.selectedCat;
    console.log("My input:" ,this.coutForm.get('selectedCat')?.value);
  }

  Show(){
    console.log(this.coutForm.get('personnel')?.value)
  }
}
