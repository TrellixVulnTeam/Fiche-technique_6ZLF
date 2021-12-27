// import { Etape } from "./etape";

import { CategorieFiche } from "./Categorie/categorie-fiche";

export class Fiche {
    public intitule!: string;
    public responsable!: string;
    public nbrCouverts !: number;
    public categorie!: CategorieFiche;
    // etape!:[Etape | Fiche]
}
