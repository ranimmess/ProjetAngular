import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/components/authentication/token-storage.service';
import { PanierItemDto } from 'src/app/entities/PanierItemDto';
import { PanierService } from '../../panier.service';

@Component({
  selector: 'app-panier-item',
  templateUrl: './panier-item.component.html',
  styleUrls: ['./panier-item.component.css']
})
export class PanierItemComponent implements OnInit {

  id!: number;
  image!: string;
  name!: string;
  quantity!: number;
  prix!: number;
  description!: string;

  Firstname:string="";
  LastName:string="";
  idUser:number=0;
  role:string="";

  private roles: string[] = [];
  IsLogedIn = false;
  showAdminBoard = false;
  username?: string;

  @Input() panierItem!: PanierItemDto;
  
  constructor(private token: TokenStorageService, private panierService: PanierService, private router: Router) { }
  
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

    this.id = this.panierItem.produit?.id!
    this.image = this.panierItem.produit?.imageURL!;
    this.name = this.panierItem.produit?.name!;
    this.quantity = this.panierItem.quantity!;
    this.prix = this.panierItem.produit?.price!;
    this.description = this.panierItem.produit?.description!;

  }

  remove() {
    this.panierService.delete(this.id, this.idUser).subscribe(
      () => this.router.navigate(['panier'])
    )
    }
  minusOne() {
    this.panierService.updateQteMinus(this.id, this.idUser).subscribe(
      () => this.router.navigate(['panier'])
    )
  }

  addOne() {
    this.panierService.updateQtePlus(this.id, this.idUser).subscribe(
      () => this.router.navigate(['panier'])
    )
  }


}
