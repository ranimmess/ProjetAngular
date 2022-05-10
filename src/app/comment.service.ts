import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Commantaire } from './commantaire';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private baseURL = "http://localhost:8081/SpringMVC/comment/";
  private url:string=this.baseURL;
  // private baseURL2 = "http://localhost:8081/SpringMVC/sujet/add-sujet";
  // private baseURL3 = "http://localhost:8081/SpringMVC/sujet/retrieve-sujet";
  constructor(private httpClient: HttpClient) { }

  getCommentsList(): Observable<Commantaire[]>{
    let apiUrl:string;

    const endpoint = 'retrieve-all-comments';
    apiUrl =  this.url + endpoint;
    const headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    return this.httpClient.get<Commantaire[]>(apiUrl);
  }
  getCommentByPost(commentId: number, commantaire: Commantaire): Observable<Object>{
    let apiUrl:string;

    const endpoint = 'add-comment';
    apiUrl = this.url + endpoint+"/"+commentId;
    const headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    return this.httpClient.put(apiUrl, commantaire);

  }

  postComment(sujet: Commantaire): Observable<Object>{
    let apiUrl:string;

    const endpoint = '/add-comment';
    apiUrl  = this.url + endpoint;
    return this.httpClient.post(apiUrl, sujet);
  }

  // getSujetById(sujetId: number): Observable<Sujet>{

  //   return this.httpClient.get<Sujet>(`${this.baseURL3}/${sujetId}`);
  // }

  
  updateComment(commentId: number, commantaire: Commantaire): Observable<Object>{
    let apiUrl:string;

    const endpoint = 'modify-comment';
    apiUrl = this.url + endpoint+"/"+commentId;
    return this.httpClient.put(apiUrl, commantaire);
  }

  getCopmmentById(commentId: number): Observable<Commantaire[]> {
    let apiUrl:string;
    const endpoint = 'retrieve-comment';
    let parameters = new HttpParams();
    apiUrl = this.url + endpoint+"/"+commentId;

    const headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');

    return this.httpClient
      .get<Commantaire[]>(apiUrl, { params: parameters })
      .pipe(catchError(this.handleError));

  }

  deleteCommentById(commentId: number): Observable<Commantaire[]> {
    let apiUrl:string;
    const endpoint = 'remove-comment';
    let parameters = new HttpParams();
    apiUrl = this.url + endpoint+"/"+commentId;

    const headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');

    return this.httpClient
      .delete<Commantaire[]>(apiUrl, { params: parameters })
      .pipe(catchError(this.handleError));

  }
  

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

}
