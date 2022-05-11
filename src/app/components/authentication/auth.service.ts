import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/entities/ApiResponse';

const AUTH_API = 'http://localhost:8181/SpringMVC/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      email,
      password
    }, httpOptions);
  }
  register(firstName:string, lastName:string, email: string, password: string, country: string, phoneNum: number, role= ["user"]): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(AUTH_API + 'signup', { 
      firstName,
      lastName,
      email,
      password,
      country,
      phoneNum,
      role,
    }, httpOptions);
  }

}
