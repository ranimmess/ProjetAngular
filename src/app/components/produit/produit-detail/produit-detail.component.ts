import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { ListProductDto } from 'src/app/entities/ListProductDto';
import { ProductWithIdDto } from 'src/app/entities/ProductWithIdDto';
import { ProductWithRatingDto } from 'src/app/entities/ProductWithRatingDto';
import { ProduitService } from '../produit.service';
import { RatingService } from '../rating.service';
import { RatingDto } from 'src/app/entities/RatingDto';
import { TokenStorageService } from '../../authentication/token-storage.service';
import { PanierService } from '../../panier/panier.service';
import { AddToPanierDto } from 'src/app/entities/AddToPanierDto';


@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.css']
})
export class ProduitDetailComponent implements OnInit {
  
  
  currentRate: number = 3.5;
	prod_id!: number;
	description!: string;
	imageUrl!: string;
	name!: string;
	price!: number;
	categorie!: string;
	nbrRating!: number;
	rating2!: number;
  prodById!: ProductWithRatingDto;
  mostLiked!: ProductWithRatingDto[];
  rating: number=0;
  rd!: RatingDto ;
  quantity: number=1;

  Firstname:string="";
  LastName:string="";
  idUser:number=0;
  role:string="";
  ad!: AddToPanierDto;

  private roles: string[] = [];
  IsLogedIn = false;
  showAdminBoard = false;
  username?: string;
  rating3: number=0;

  ratingChangeSubscription: Subscription = new Subscription;
  
  constructor( private token: TokenStorageService, private route: ActivatedRoute,
     private produitService: ProduitService, private ratingService: RatingService,
     private panierService: PanierService,  private router: Router) {
    }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.getProduct();

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

    this.getrating();
    }

    
  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    //console.log(id);
    this.produitService.produitByIdWithRating(id).subscribe(
        (prod:ProductWithIdDto )=> {
          this.price = prod.prodById?.price!;
          this.categorie = prod.prodById?.categorie!;
          this.imageUrl = prod.prodById?.imageUrl!;
          this.description = prod.prodById?.description!;
          this.name = prod.prodById?.name!;
          this.nbrRating = prod.prodById?.nbrRating!;
          this.rating2 = prod.prodById?.rating!;
          this.prod_id = prod.prodById?.prod_id!;
          //console.log(this.prodById);
          this.mostLiked = prod.mostLiked!;
        },
    );
  }

  getrating():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.rd = new RatingDto(this.rating,id);
      this.ratingService.getRating(this.rd, this.idUser).subscribe( p => {
        this.rating = p.rating!;
        this.rating3 = p.rating!;
      });
  }
  
  x(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.rating=this.rating3;
    this.rd = new RatingDto(this.rating3,id);
    console.log(this.rating3);
    this.ratingService.addRating(this.rd, this.idUser).subscribe(
      () => this.router.navigate(['/produit', this.prod_id])
    );
  }
  addToPanier(){
    this.ad = new AddToPanierDto(0, this.prod_id, this.quantity);
    this.panierService.addToPanier(this.ad, this.idUser).subscribe(
    );
    }
  }


