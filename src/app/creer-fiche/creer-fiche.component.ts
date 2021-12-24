import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {FicheService} from '../services/fiche.service';


@Component({
  selector: 'app-creer-fiche',
  templateUrl: './creer-fiche.component.html',
  styleUrls: ['./creer-fiche.component.css']
})
export class CreerFicheComponent implements OnInit {

  ficheForm: FormGroup = new FormGroup({});

  // @ts-ignore
  intitule: string;
  // @ts-ignore
  responsable: string;
  // @ts-ignore
  nbCouverts: number;
  // @ts-ignore
  categorie: string;
  message: string = "";


  constructor(private router: Router,private formBuilder: FormBuilder, ficheservice: FicheService) { }

  isShown: boolean = false;

  ngOnInit(): void {
    this.ficheForm = this.formBuilder.group({
      intitule: ['', Validators.required],
      responsable: ['', Validators.required],
      nbCouverts: ['', Validators.required],
      categorie: ['', Validators.required]
    });
  }

  toggleShow(){
    this.isShown = ! this.isShown;
  }

  Submit(){
    console.log(this.ficheForm.get('intitule')?.value)
    console.log(this.ficheForm.get('responsable')?.value)
    console.log(this.ficheForm.get('nbCouverts')?.value)
    console.log(this.ficheForm.get('categorie')?.value)
  }
  CreateRecord(){
    let Record = {};
    // @ts-ignore
    Record['nameFiche'] = this.intitule;
    // @ts-ignore
    Record['responsableFiche'] = this.responsable;
    // @ts-ignore
    Record['categorieFiche'] = this.categorie;
    // @ts-ignore
    Record['nbCouvertsFiche']= this.nbCouverts;

    // @ts-ignore
    // @ts-ignore
    this.ficheservice.create_Newfiche(Record).then(res =>{
      this.intitule = "";
      // @ts-ignore
      this.nbCouverts = undefined;
      this.categorie = "";
      this.responsable = "";
      console.log(res);
      this.message = "fiche data save done"
    }).catch((error: any) => {
      console.log(error);
    });



  }

}
