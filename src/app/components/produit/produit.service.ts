import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListProductDto } from 'src/app/entities/ListProductDto';
import { ProductWithIdDto } from 'src/app/entities/ProductWithIdDto';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private baseURL = "http://localhost:8181/SpringMVC/product/";

  constructor(private http: HttpClient) { }

  listOfAllProductWithRating():Observable<ListProductDto> {
    return this.http.get<ListProductDto>(this.baseURL + "get");
  }

  produitByIdWithRating(prod_Id:number=1):Observable<ProductWithIdDto> {
    return this.http.get<ProductWithIdDto>(this.baseURL + "get/" + prod_Id);
  }

  filterProductByCategorie(categ:string):Observable<ListProductDto> {
    return this.http.get<ListProductDto>(this.baseURL + "filter_product?categ=" + categ);
  }

  rechercheProducts(x:string):Observable<ListProductDto> {
    return this.http.get<ListProductDto>(this.baseURL + "recherche_product?x=" + x);
  }
}
