import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entities/User';
import { TokenStorageService } from '../authentication/token-storage.service';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {

  Firstname:string="";
  LastName:string="";
  //IsLogedIn:string="";
  idUser:number=0;
  role:string="";

  private roles: string[] = [];
  IsLogedIn = false;
  showAdminBoard = false;
  username?: string;

  constructor(private token: TokenStorageService) { }

  ngOnInit(): void {

    this.IsLogedIn = !!this.token.getToken();
    if (this.IsLogedIn) {
      const currentUser = this.token.getUser();
      this.roles = currentUser.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.username = currentUser.username;
      this.Firstname = currentUser.firstName;
      this.LastName = currentUser.lastName;
     }
}
  Logout(): void {
    this.token.signOut();
    window.location.reload();
  }


}
