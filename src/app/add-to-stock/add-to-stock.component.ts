import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategorieAllergene } from '../models/categorie-allergene';
import { CategorieIngredient } from '../models/Categorie/categorie-ingredient';
import { Ingredients } from '../models/ingredients';
import { CateAllergeneService } from '../services/Catégorie/cate-allergene.service';
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

  isShown : boolean =false;

  CategoriesAllergene :  CategorieAllergene[]=[]

  constructor(public ingredientservice: IngredientsService,private formBuilder: FormBuilder,
      public afs: AngularFirestore, public typeIng: TypeIngredientsService,
      public CategorieIngredService : CategorieIngredientService, public cateAllergeneService :CateAllergeneService) {
      
  }

  ngOnInit(): void {
    this.stockForm = this.formBuilder.group({
      nom: ['', Validators.required],
      selectedCatIngr: ['', Validators.required],
      prix: ['', Validators.required],
      quantite: ['', Validators.required],
      unite: ['', Validators.required],
      allergene: [''],
      CatAllergene: ['', Validators.required]
    });
    
    this.getAllCategories();
    this.getAllergensCategories();
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
  
  getAllergensCategories() : void {
    this.cateAllergeneService.getCategorieListe().subscribe(res =>{
      this.CategoriesAllergene = res.map(e => {
        return {
          idCategorieAll: e.payload.doc.id, ...e.payload.doc.data() as {}
        } as CategorieAllergene;
      })
    });
  }

  //Ajouter l'ingrédient après validation du formulaire
  valider(){
   this.ingredientservice.create(this.ingredients).then(() => {
     return alert('Created new ingredients successfully!')
    });
  }

  toggleShow1(){
    this.isShown =  !this.isShown;
  }

}
