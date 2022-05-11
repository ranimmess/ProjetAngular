import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TokenStorageService } from '../authentication/token-storage.service';
import { nbrPanier, PanierService } from '../panier/panier.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  Firstname:string="";
  LastName:string="";
  idUser:number=0;
  role:string="";

  private roles: string[] = [];
  IsLogedIn = false;
  showAdminBoard = false;
  username?: string;

  nbrElemnt = 0;
  nbrElemPanierChangedSubscription: Subscription = new Subscription;


  constructor(private token: TokenStorageService, private panierService: PanierService) { }

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

     this.nbrElemPanierChangedSubscription = this.panierService.nbrElemChanged.subscribe(
      (np: nbrPanier) => {
        this.nbrElemnt = np.nbrelempanier!;
      });

      this.panierService.nbrElementPanier(this.idUser).subscribe( np => {
        this.nbrElemnt = np.nbrelempanier!;
      });
  }

  Logout(): void {
    this.token.signOut();
    window.location.reload();
  }

  ngOnDestroy(){
    this.nbrElemPanierChangedSubscription.unsubscribe();
  }

}
