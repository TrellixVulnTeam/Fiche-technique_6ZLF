import { Etape } from "./etape";
import { CategorieFiche } from "./Categorie/categorie-fiche";

export class Fiche {
    public idFiche !: string;
    public intitule!: string;
    public responsable!: string;
    public nbrCouverts !: number;
    public categorie!: CategorieFiche;
    public etape!: Etape[];
    public materielSpes?: string;
    public materielDress?: string;

}
