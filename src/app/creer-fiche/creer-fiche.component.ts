import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Fiche } from '../models/fiche';
import { FicheService } from '../services/ficheServices/fiche.service';
import { Input } from '@angular/core';
import { ViewChild } from '@angular/core';
import { CreerEtapeComponent } from '../creer-etape/creer-etape.component';


@Component({
  selector: 'app-creer-fiche',
  templateUrl: './creer-fiche.component.html',
  styleUrls: ['./creer-fiche.component.css']
})
export class CreerFicheComponent implements OnInit {

  fiche : Fiche = new Fiche();

  @ViewChild(CreerEtapeComponent) childComponent!: CreerEtapeComponent;
  @Input() EtapesInfo : FormGroup | null = null;
  
  // Formulaire
  ficheForm: FormGroup = new FormGroup({});
  // Etape Fiche
  tabEtapes =  this.formBuilder.array([]);

  isShown: boolean = false;

  constructor(private router: Router,private formBuilder: FormBuilder,
    private ficheService :FicheService) {
  }

  ngOnInit(): void {
    this.ficheForm = this.formBuilder.group({
      intitule: ['', Validators.required],
      responsable: ['', Validators.required],
      nbCouverts: ['', Validators.required],
      categorie: ['', Validators.required],
    });
  }

  toggleShow(){
    this.isShown = ! this.isShown;
  }

  Submit(){
    console.log(this.fiche);
    this.ficheService.create(this.fiche).then(() => {
      console.log('Created new fiche successfully!');
    });
  }

  recevoir(event: FormGroup){
    this.EtapesInfo = event;
    // this.tabEtapes.push(this.EtapesInfo.value)
    //////////////////////////////

    this.tabEtapes.push(this.childComponent.EtapeForm);
    this.ficheForm.addControl('EtapesFiche', this.tabEtapes);
    this.childComponent.EtapeForm.setParent(this.ficheForm);

    //////////////////////////////
    // this.ficheForm.addControl('Etape',event.value.controls)
    // console.log(event.value)
    // console.log("Etaaapes : \n"+ this.EtapesInfo)
  }

}
