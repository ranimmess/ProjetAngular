import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { ListProductDto } from 'src/app/entities/ListProductDto';
import { RatingDto } from 'src/app/entities/RatingDto';
import { ProduitService } from './produit.service';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  private baseURL = "http://localhost:8181/SpringMVC/rating/";


  constructor(private http: HttpClient, private produitService: ProduitService) { }

  addRating(apd: RatingDto, user_id:number=1): Observable<RatingDto>{
    return this.http.post<RatingDto>(this.baseURL + 'post?user_id=' + user_id, apd)
      }

  getRating(apd: RatingDto, user_id:number=1): Observable<RatingDto>{
    return this.http.post<RatingDto>(this.baseURL + 'get?user_id=' + user_id, apd)
  }

  
    
}
