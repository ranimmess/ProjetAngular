export class AddToPanierDto{

    id?: number;
    productId?: number;
    quantity?: number;

    constructor(id:number, p:number, q:number){
        this.id=id;
        this.productId=p;
        this.quantity=q;
    }

}