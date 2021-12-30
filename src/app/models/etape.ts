import { Ingredients } from "./ingredients";

export class Etape {
    public numEtape!: number;
    public nomEtape!: string;
    public ingredients!: [Ingredients]; //Liste de Liste contenant l'ingredient et la quantitée
    public quantites !: [number];
    public description!:string;
    public temps!:number;

}
