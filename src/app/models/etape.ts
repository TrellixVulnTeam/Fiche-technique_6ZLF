export class Etape {
    public numEtape!: number;
    public nomEtape!: string;
    public ingredients!: [[string,number]]; //Liste de Liste contenant l'ingredient et la quantitée
                                    // pour ajouter on fait ingredients[i].push("Lait", 1)
                                    public description!:string;
    public temps!:number;

    public constructor(numEtape:number,nomEtape:string,ingredient:[string,number],temps:number){
        this.numEtape = numEtape;
        this.nomEtape = nomEtape;
        this.ingredients = [ingredient];
        this.temps = temps;

    }
}
