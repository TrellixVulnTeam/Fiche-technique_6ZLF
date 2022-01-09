import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategorieIngredient } from '../models/Categorie/categorie-ingredient';
import { Ingredients } from '../models/ingredients';
import { CategorieIngredientService } from '../services/Catégorie/categorie-ingredient.service';
import { IngredientsService } from '../services/gestionStock/ingredients.service';
import { TypeIngredientsService } from '../services/types-ingredients.service';

@Component({
  selector: 'app-add-to-stock',
  templateUrl: './add-to-stock.component.html',
  styleUrls: ['./add-to-stock.component.css']
})
export class AddToStockComponent implements OnInit {

  //Liste des categories
  listCat : CategorieIngredient[]=[];
  ingredients : Ingredients = new Ingredients();

  stockForm !: FormGroup;

  constructor(public ingredientservice: IngredientsService,private formBuilder: FormBuilder,
      public afs: AngularFirestore, public typeIng: TypeIngredientsService,
      public CategorieIngredService : CategorieIngredientService) {
      
  }

  ngOnInit(): void {
    this.stockForm = this.formBuilder.group({
      nom: ['', Validators.required],
      selectedCatIngr: ['', Validators.required],
      prix: ['', Validators.required],
      quantite: ['', Validators.required],
      unite: ['', Validators.required]
    });
    this.getAllCategories();
  }

  getAllCategories() : void {
    this.CategorieIngredService.getCategorieListe().subscribe(res =>{
      this.listCat = res.map(e => {
        return {
          idCategorie: e.payload.doc.id, ...e.payload.doc.data() as {}
        } as CategorieIngredient;
      })
    });
  }

  //Ajouter l'ingrédient après validation du formulaire
  valider(){
   this.ingredientservice.create(this.ingredients).then(() => {
     return alert('Created new ingredients successfully!')
    });


  }

}
