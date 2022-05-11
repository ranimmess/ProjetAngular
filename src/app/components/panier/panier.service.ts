import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { AddToPanierDto } from 'src/app/entities/AddToPanierDto';
import { ApiResponse } from 'src/app/entities/ApiResponse';
import { Panier } from 'src/app/entities/Panier';
import { HttpClient } from '@angular/common/http';

export class nbrPanier {
	 nbrelempanier?: number;  
}


@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private baseURL = "http://localhost:8181/SpringMVC/panier/";

  panierListChanged=new Subject<Panier>();
  nbrElemChanged=new Subject<nbrPanier>();


  constructor(private http: HttpClient) { }

  // get all cart items for a user
  listElementUser(user_id:number=1):Observable<Panier> {
    return this.http.get<Panier>(this.baseURL + "get?user_id=" + user_id);
  }

  //store (Post )
  addToPanier(apd: AddToPanierDto, user_id:number=1): Observable<ApiResponse>{
    return this.http.post<ApiResponse>(this.baseURL + 'add?user_id=' + user_id, apd).pipe(
      tap(v => this.notifyPanierListChanged()),
      tap(n => this.notifynbrElemListChanged())
    );
      }

  // delete a cart item for a user
  delete(panier_Elem_Id:number, user_id:number=1): Observable<ApiResponse>{
    return this.http.delete<ApiResponse>(this.baseURL + 'delete/' + panier_Elem_Id + '?user_id=' + user_id).pipe(
      tap(v => this.notifyPanierListChanged())
    );
  }

  notifyPanierListChanged(){
    this.listElementUser().subscribe(
      p => this.panierListChanged.next(p)
    )
  }

  updateQteMinus(panier_Elem_Id:number, user_id:number=1): Observable<ApiResponse>{
    return this.http.get<ApiResponse>(this.baseURL + 'updateqte/' + panier_Elem_Id + '?user_id=' + user_id).pipe(
      tap(v => this.notifyPanierListChanged())
    );
  }

  updateQtePlus(panier_Elem_Id:number, user_id:number=1): Observable<ApiResponse>{
    return this.http.get<ApiResponse>(this.baseURL + 'updateqteplus/' + panier_Elem_Id + '?user_id=' + user_id).pipe(
      tap(v => this.notifyPanierListChanged())
    );
  }

  nbrElementPanier(user_id:number=1): Observable<nbrPanier>{
    return this.http.get<nbrPanier>(this.baseURL + 'nbrPanier?user_id=' + user_id);
  }

  notifynbrElemListChanged(){
    this.nbrElementPanier().subscribe(
      p => this.nbrElemChanged.next(p)
    )
  }

}
