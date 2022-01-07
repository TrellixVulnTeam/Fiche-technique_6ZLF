import { ModelIngredFiche } from "./model-ingred-fiche";

export class Etape {
    
    public numEtape!: number;
    public NomDenree!: string;
    public ingred!: ModelIngredFiche[]; //Liste de Liste contenant l'ingredient et la quantitée
    public Description!:string;
    public Temps!:number;

}
