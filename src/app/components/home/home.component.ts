import { Component, OnInit } from '@angular/core';
import { ListProductDto } from 'src/app/entities/ListProductDto';
import { ProductWithRatingDto } from 'src/app/entities/ProductWithRatingDto';
import { ProduitService } from '../produit/produit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Firstname:string="zzzz";
  LastName:string="eee";
  //IsLogedIn:string="";
  idUser:number=0;
  role:string="zzz";

  private roles: string[] = [];
  IsLogedIn = false;
  showAdminBoard = false;
  username?: string;

  allpro!: ProductWithRatingDto[];
	mostLikedProduct!: ProductWithRatingDto[];
	elecCateg!: ProductWithRatingDto[];
	tabTelCatg!: ProductWithRatingDto[];

  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    
    this.produitService.listOfAllProductWithRating().subscribe( p => {
      this.allpro = p.allpro!;
      console.log(this.allpro)
      this.mostLikedProduct = p.mostLikedProduct!;
      this.elecCateg = p.elecCateg!;
      this.tabTelCatg = p.tabTelCatg!;
    });
  }

  

}
