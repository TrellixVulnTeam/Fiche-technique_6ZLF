import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
=======
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

>>>>>>> nour

@Component({
  selector: 'app-creer-fiche',
  templateUrl: './creer-fiche.component.html',
  styleUrls: ['./creer-fiche.component.css']
})
export class CreerFicheComponent implements OnInit {
  
<<<<<<< HEAD
  constructor(private router: Router) { }
=======
  ficheForm: FormGroup = new FormGroup({});


  constructor(private router: Router,private formBuilder: FormBuilder) { }
>>>>>>> nour

  isShown: boolean = false;
  
  ngOnInit(): void {
<<<<<<< HEAD
=======
    this.ficheForm = this.formBuilder.group({
      intitule: ['', Validators.required],
      responsable: ['', Validators.required],
      nbCouverts: ['', Validators.required],
      categorie: ['', Validators.required]
    });
>>>>>>> nour
  }

  toggleShow(){
    this.isShown = ! this.isShown;
  }

<<<<<<< HEAD
=======
  Submit(){
    console.log("SUBMIIIT")
    console.log(this.ficheForm.get('intitule')?.value)
    console.log(this.ficheForm.get('responsable')?.value)
    console.log(this.ficheForm.get('nbCouverts')?.value)
    console.log(this.ficheForm.get('categorie')?.value)


  }
>>>>>>> nour

}
