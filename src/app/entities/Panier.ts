import { PanierItemDto } from "./PanierItemDto";

export interface Panier{

    panierItems?: PanierItemDto[];
    totalCost?: number;

}   