import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  title = 'myApp';
  flag:boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  apply(value:string){
    this.flag = value == "login"?true : false;
  }
  
}
