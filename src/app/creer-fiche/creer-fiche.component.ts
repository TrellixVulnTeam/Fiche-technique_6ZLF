import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Fiche } from '../models/fiche';
import { FicheService } from '../services/ficheServices/fiche.service';


@Component({
  selector: 'app-creer-fiche',
  templateUrl: './creer-fiche.component.html',
  styleUrls: ['./creer-fiche.component.css']
})
export class CreerFicheComponent implements OnInit {

  // @Input() fiche : Fiche | null = null;

  fiche : Fiche = new Fiche();

  isShown: boolean = false;

  ficheForm: FormGroup = new FormGroup({});

  constructor(private router: Router,private formBuilder: FormBuilder,
    private ficheService :FicheService) { 

  }

  
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

    // this.fiche['intitule'] = this.ficheForm.get('intitule')?.value
    // this.fiche['intitule'] = this.ficheForm.get('responsable')?.value
    // this.fiche['intitule'] = this.ficheForm.get('nbCouverts')?.value
    // this.fiche['intitule'] = this.ficheForm.get('categorie')?.value
    console.log(this.fiche);
    
    this.ficheService.create(this.fiche).then(() => {
      console.log('Created new fiche successfully!');
    });

  }

}
