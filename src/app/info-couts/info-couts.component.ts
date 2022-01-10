import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Cout } from '../models/Couts/cout';
import { CoutsService } from '../services/couts.service';

@Component({
  selector: 'app-info-couts',
  templateUrl: './info-couts.component.html',
  styleUrls: ['./info-couts.component.css']
})
export class InfoCoutsComponent implements OnInit {

  coutForm: FormGroup = new FormGroup({});

  list : Cout[]=[];

  constructor(private formBuilder: FormBuilder, public coutService: CoutsService, public afs: AngularFirestore) {
  }

  ngOnInit(): void {
    this.coutForm = this.formBuilder.group({
      coutPersonnel: ['', Validators.required],
      coutFluide: ['', Validators.required],
      coefficient: ['', Validators.required],
      coutAssaisonnement : [''],
    });
    this.getListeCouts();
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

  valider(cout : Cout){
    this.coutService.update(cout.idCout, this.coutForm.value);
  }


}
