import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sellerByCategoDto } from 'src/app/entities/sellerByCategoDto';
import { sellsCountryDto } from 'src/app/entities/sellsCountryDto';
import { sellsDateDto } from 'src/app/entities/sellsDateDto';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseURL = "http://localhost:8181/SpringMVC/admin/";

  constructor(private http: HttpClient) { }

  seller_by_date():Observable<sellsDateDto> {
    return this.http.get<sellsDateDto>(this.baseURL + "seller-by-date");
  }

  seller_by_country():Observable<sellsCountryDto> {
    return this.http.get<sellsCountryDto>(this.baseURL + "seller-by-country");
  }

  seller_by_catego():Observable<sellerByCategoDto> {
    return this.http.get<sellerByCategoDto>(this.baseURL + "seller-by-catego");
  }

}
