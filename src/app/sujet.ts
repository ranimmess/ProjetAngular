import { Commantaire } from "./commantaire";

export class Sujet {
    idSujet: number;
    libelleSujet: string;
    decreption: string;
    nbrComment: number;
    timestamp: Date;
    commantaire: Commantaire;
}
