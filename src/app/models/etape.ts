import { Ingredients } from "./ingredients";
import { ModelIngredFiche } from "./model-ingred-fiche";

export class Etape {
    public idEtape !: string;
    public titreEtape !: string;
    public NomDenree!: string;

    public Ingredients!: ModelIngredFiche[]; //Liste de Liste contenant l'ingredient et la quantitée
    
    public description!:string;
    public temps!:number;
}
