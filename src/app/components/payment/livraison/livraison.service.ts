import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { LivraisonDTO } from 'src/app/entities/LivraisonDTO';

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {

  
  private baseURL = "http://localhost:8181/SpringMVC/livraison";

  livrChanged=new Subject<LivraisonDTO>();

  constructor(private http: HttpClient) { }

  index( user_id:number=1):Observable<LivraisonDTO>
  {
    return this.http.get<LivraisonDTO>(this.baseURL + '/get?user_id=' + user_id);
   
  }

  //store (Post Book)
  store(livr: LivraisonDTO): Observable<LivraisonDTO>{
    return this.http.post<LivraisonDTO>(this.baseURL + '/post', livr).pipe(
      tap(v => this.notifyLivrChanged())
    );
    
      }
  notifyLivrChanged() {
    this.index().subscribe(
      l => this.livrChanged.next(l))
  }


  //update
  update(livr: LivraisonDTO): Observable<LivraisonDTO>{
    return this.http.put<LivraisonDTO>(this.baseURL + '/update' , livr).pipe(
      tap(v => this.notifyLivrChanged())
    );
    
  }


}
