import { Ingredients } from "./ingredients";

export class Etape {
    public numEtape!: number;
    public NomDenree!: string;
    public ingred!: Ingredients[]; //Liste de Liste contenant l'ingredient et la quantitée
    public Description!:string;
    public Temps!:number;

}
