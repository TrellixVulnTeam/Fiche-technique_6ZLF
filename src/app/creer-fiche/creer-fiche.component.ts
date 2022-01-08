import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Fiche } from '../models/fiche';
import { FicheService } from '../services/ficheServices/fiche.service';
import { Input } from '@angular/core';
import { ViewChild } from '@angular/core';
import { CreerEtapeComponent } from '../creer-etape/creer-etape.component';
import { CategorieFicheService } from '../services/Catégorie/categorie-fiche.service';
import { CategorieFiche } from 'src/app/models/Categorie/categorie-fiche';
import { ListeEtapesComponent } from '../liste-etapes/liste-etapes.component';
import { Etape } from '../models/etape';


@Component({
  selector: 'app-creer-fiche',
  templateUrl: './creer-fiche.component.html',
  styleUrls: ['./creer-fiche.component.css']
})
export class CreerFicheComponent implements OnInit {
    
  // Formulaire
  ficheForm: FormGroup = new FormGroup({});

  // Etape Fiche
  tabEtapes : any;

  isShown: boolean = false;
  show : boolean = false;

  constructor(private router: Router,private formBuilder: FormBuilder,
    private ficheService :FicheService, private categorieFiche : CategorieFicheService) {
  }

  ngOnInit(): void {
    this.ficheForm = this.formBuilder.group({
      intitule: ['', Validators.required],
      responsable: ['', Validators.required],
      nbCouverts: ['', Validators.required],
      categorie: ['', Validators.required],
      materielSpes : [''],
      materielDress : [''],
    });
  }

  toggleShow(){
    this.isShown = ! this.isShown;
  }

  Submit(){
    this.ficheService.create(this.ficheForm.value).then(() => {
      console.log('Created new fiche successfully!');
    });
  }

  // getListeCategorie(){
  //   this.categorieFiche.getCategorieListe().subscribe(res =>{
  //     this.categories = res.map(e => {
  //       return {
  //         idCatFiche: e.payload.doc.id, ...e.payload.doc.data() as {}
  //       } as CategorieFiche ;
  //     })
  //   });
  // }

}
