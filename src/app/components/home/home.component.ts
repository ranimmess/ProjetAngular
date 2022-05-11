import { Component, OnInit } from '@angular/core';
import { AddToPanierDto } from 'src/app/entities/AddToPanierDto';
import { ListProductDto } from 'src/app/entities/ListProductDto';
import { ProductWithRatingDto } from 'src/app/entities/ProductWithRatingDto';
import { TokenStorageService } from '../authentication/token-storage.service';
import { PanierService } from '../panier/panier.service';
import { ProduitService } from '../produit/produit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Firstname:string="";
  LastName:string="";
  //IsLogedIn:string="";
  idUser:number=0;
  role:string="";
  

  private roles: string[] = [];
  IsLogedIn = false;
  showAdminBoard = false;
  username?: string;

  allpro!: ProductWithRatingDto[];
	mostLikedProduct!: ProductWithRatingDto[];
	elecCateg!: ProductWithRatingDto[];
	tabTelCatg!: ProductWithRatingDto[];
  quantity: number=1;


  ad!: AddToPanierDto;
  
  constructor(private produitService: ProduitService, private panierService: PanierService, 
                 private token: TokenStorageService ) { }

  ngOnInit(): void {

    this.IsLogedIn = !!this.token.getToken();
    if (this.IsLogedIn) {
      const currentUser = this.token.getUser();
      this.roles = currentUser.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.username = currentUser.username;
      this.Firstname = currentUser.firstName;
      this.LastName = currentUser.lastName;
      this.idUser = currentUser.id;
     }
    
    this.produitService.listOfAllProductWithRating().subscribe( p => {
      this.allpro = p.allpro!;
      console.log(this.allpro)
      this.mostLikedProduct = p.mostLikedProduct!;
      this.elecCateg = p.elecCateg!;
      this.tabTelCatg = p.tabTelCatg!;
    });
  }


  addToPanier(prod_id: number){
    this.ad = new AddToPanierDto(0, prod_id, this.quantity);
    this.panierService.addToPanier(this.ad, this.idUser).subscribe(
    );
    }
  

}
