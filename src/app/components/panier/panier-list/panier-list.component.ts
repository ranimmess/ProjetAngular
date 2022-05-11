import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Panier } from 'src/app/entities/Panier';
import { PanierItemDto } from 'src/app/entities/PanierItemDto';
import { TokenStorageService } from '../../authentication/token-storage.service';
import { RatingService } from '../../produit/rating.service';
import { PanierService } from '../panier.service';

@Component({
  selector: 'app-panier-list',
  templateUrl: './panier-list.component.html',
  styleUrls: ['./panier-list.component.css']
})
export class PanierListComponent implements OnInit {

  panierItems: PanierItemDto[] = [];
 // @Output() filsEvent = new EventEmitter<number>();
  
  totalcost!: number;
  Firstname:string="";
  LastName:string="";
  idUser:number=0;
  role:string="";

  private roles: string[] = [];
  IsLogedIn = false;
  showAdminBoard = false;
  username?: string;

  ratingChangeSubscription: Subscription = new Subscription;

  panierListChangeSubscription: Subscription = new Subscription;

  constructor(private panierService: PanierService, private token: TokenStorageService,
    private router: Router, private ratingService: RatingService) { }

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

    this.panierListChangeSubscription = this.panierService.panierListChanged.subscribe(
      (p: Panier) => {
        this.panierItems = p.panierItems!;
        this.totalcost = p.totalCost!;
      });

      this.panierService.listElementUser(this.idUser).subscribe( p => {
        this.panierItems = p.panierItems!;
        this.totalcost = p.totalCost!;
        //this.filsEvent.emit(p.totalCost)
      });
      
  }

  ngOnDestroy(){
    this.panierListChangeSubscription.unsubscribe();
  }
  
}
