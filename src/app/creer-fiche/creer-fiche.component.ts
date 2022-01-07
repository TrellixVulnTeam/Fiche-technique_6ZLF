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


@Component({
  selector: 'app-creer-fiche',
  templateUrl: './creer-fiche.component.html',
  styleUrls: ['./creer-fiche.component.css']
})
export class CreerFicheComponent implements OnInit {

  fiche : Fiche = new Fiche();

  categories : CategorieFiche[]=[];

  @ViewChild(CreerEtapeComponent) childComponent!: CreerEtapeComponent;
  @Input() EtapesInfo : FormGroup | null = null;
  
  // Formulaire
  ficheForm: FormGroup = new FormGroup({});
  // Etape Fiche
  tabEtapes =  this.formBuilder.array([]);

  isShown: boolean = false;

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
      etapes : this.formBuilder.array([])
    });
  }

  toggleShow(){
    this.isShown = ! this.isShown;
  }

  recevoir(event: FormGroup){
    this.tabEtapes.push(this.childComponent.EtapeForm);
    this.ficheForm.setControl('etapes', this.tabEtapes);
    this.childComponent.EtapeForm.setParent(this.ficheForm);

    // this.EtapesInfo = event;
    // // this.tabEtapes.push(this.EtapesInfo.value)
    // //////////////////////////////
    //////////////////////////////
    // this.ficheForm.addControl('Etape',event.value.controls)
    // console.log(event.value)
    // console.log("Etaaapes : \n"+ this.EtapesInfo)
  }

  Submit(){
    console.log(this.fiche);
    this.ficheService.create(this.fiche).then(() => {
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
