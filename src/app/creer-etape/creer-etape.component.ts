import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Etape } from '../models/etape';

@Component({
  selector: 'app-creer-etape',
  templateUrl: './creer-etape.component.html',
  styleUrls: ['./creer-etape.component.css']
})
export class CreerEtapeComponent implements OnInit {

  @Input() etape : Etape | null = null;

  EtapeForm: FormGroup = new FormGroup({});

  cpt : number = 1;
  ingred !: FormArray;
  Quantites !: FormArray;

  constructor(private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.EtapeForm = this.formBuilder.group({
      Nom: ['', Validators.required],
      Ingredient: this.formBuilder.array([
        this.formBuilder.control(['', Validators.required])
      ]),
      Quantite: this.formBuilder.array([
        this.formBuilder.control(['', Validators.required])
      ]),
      Description: ['', Validators.required],
      Temps: ['', Validators.required]
    });
  }

  addIngredient(){
    this.ingred = this.EtapeForm.get('Ingredient') as FormArray;
    this.ingred.push(this.formBuilder.control(''))

    this.Quantites = this.EtapeForm.get('Quantite') as FormArray;
    this.Quantites.push(this.formBuilder.control(''))
  }

  Enregistrer(){
    this.cpt ++
    if(this.etape){
      this.etape.numEtape = this.cpt;
      this.etape.nomEtape = this.EtapeForm.get('Nom')?.value;

      for(var val of this.ingred.value){
        for(var q of this.Quantites.value){
          let tet : [string,number] = [val,q];
          this.etape.ingredients.push(tet);
        }
      }

      this.etape.temps = this.EtapeForm.get('Temps')?.value
    }

    // this.EtapeForm.patchValue({
    //   'NumEtape':this.cpt,
    //   'NomEtape':this.EtapeForm.get('Nom')?.value,
    //   'ingredient': this.ingred,
    //   'Quantite':this.EtapeForm.get('Quantite')?.value,
    //   'description':this.EtapeForm.get('Description')?.value,
    //   'Temps' : this.EtapeForm.get('Temps')?.value
    // });
    

  }

}
