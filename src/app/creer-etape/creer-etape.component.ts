import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IngredientsService} from "../services/ingredients.service";

@Component({
  selector: 'app-creer-etape',
  templateUrl: './creer-etape.component.html',
  styleUrls: ['./creer-etape.component.css']
})
export class CreerEtapeComponent implements OnInit {
  ingredientForm: FormGroup = new FormGroup({});

  constructor(private router: Router, private formBuilder: FormBuilder, public ingredientService: IngredientsService) { }

  ngOnInit(): void {
    this.ingredientForm = this.formBuilder.group({
      denree: ['', Validators.required],
      categorie: ['', Validators.required],
      ingredients: ['', Validators.required],
      quantite: ['', Validators.required],


    });
  }
  ngOnChanges(): void {
    this.ingredientService.log('updated');
  }
  ajouterIngredient(){
    this.ingredientService.log(this.ingredientForm.get('denree')?.value)
  }
  Show(){
    console.log(this.ingredientForm.get('denree')?.value)
  }

}
