export class RatingDto{
	
        rating?: number;
        prod_id?: number;
        
        constructor(r:number, p:number){
            this.prod_id=p;
            this.rating=r;
        }
}