import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-creer-fiche',
  templateUrl: './creer-fiche.component.html',
  styleUrls: ['./creer-fiche.component.css']
})
export class CreerFicheComponent implements OnInit {
  
  ficheForm: FormGroup = new FormGroup({});


  constructor(private router: Router,private formBuilder: FormBuilder) { }

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

}
