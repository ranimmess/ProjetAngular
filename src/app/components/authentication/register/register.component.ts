import { Component, OnInit } from '@angular/core';
import { ApiResponse } from 'src/app/entities/ApiResponse';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {
    firstName: null,
    lastName: null,
    email: null,
    password: null, 
    country: null,
    phoneNum: null,    
  };
  isSuccessful = false;
  isSignUpFailed = false;
  message = 'check Forum';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { firstName, lastName, email, password, country, phoneNum, role} = this.form;
    this.authService.register(firstName, lastName, email, password, country, phoneNum, role).subscribe({
      next: (data: ApiResponse) => {
        this.isSuccessful = data.success!;
        this.message = data.message!;
      },
      error: (err: ApiResponse) => {
        this.isSuccessful = false;
        this.message = 'Email is already in use!';
      }
    });
      
  }
}
