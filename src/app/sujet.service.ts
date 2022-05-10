import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Sujet } from './sujet';

@Injectable({
  providedIn: 'root'
})
export class SujetService {
  private baseURL = "http://localhost:8081/SpringMVC/sujet/";
  private url: string = this.baseURL;
  private urlComments: string = "http://localhost:8081/SpringMVC/comment/";
  // private baseURL2 = "http://localhost:8081/SpringMVC/sujet/add-sujet";
  // private baseURL3 = "http://localhost:8081/SpringMVC/sujet/retrieve-sujet";
  constructor(private httpClient: HttpClient) { }

  getSujetsList(): Observable<Sujet[]> {
    let apiUrl: string;

    const endpoint = 'retrieve-all-sujets';
    apiUrl = this.url + endpoint;
    return this.httpClient.get<Sujet[]>(apiUrl);
  }

  createSujet(sujet: Sujet): Observable<Object> {
    let apiUrl: string;

    const endpoint = '/add-sujet';
    apiUrl = this.url + endpoint;
    return this.httpClient.post(apiUrl, sujet);
  }

  createCommentaire(commentaire: string, sujet:Sujet): Observable<Object> {
    let apiUrl: string;
    // let newComment: any = { "comment": commentaire, "sujet":sujet }
    const endpoint = 'add-comment';
    // apiUrl = this.urlComments + endpoint + "/" + sujetId;

    apiUrl = this.urlComments + endpoint + "/" + sujet.idSujet;
    return this.httpClient.post(apiUrl, {comment:commentaire});
    
  }

  // getSujetById(sujetId: number): Observable<Sujet>{

  //   return this.httpClient.get<Sujet>(`${this.baseURL3}/${sujetId}`);
  // }


  updateSujet(sujetId: number, sujet: Sujet): Observable<Object> {
    let apiUrl: string;

    const endpoint = 'modify-sujet';
    apiUrl = this.url + endpoint + "/" + sujetId;
    return this.httpClient.put(apiUrl, sujet);
  }

  getSujetById(sujetId: number): Observable<Sujet[]> {
    let apiUrl: string;
    const endpoint = 'retrieve-sujet';
    let parameters = new HttpParams();
    apiUrl = this.url + endpoint + "/" + sujetId;

    const headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');

    return this.httpClient
      .get<Sujet[]>(apiUrl, { params: parameters })
      .pipe(catchError(this.handleError));

  }

  getCommentsById(sujetId: number): Observable<Sujet[]> {
    let apiUrl: string;
    const endpoint = 'retrieve-all-comments';
    let parameters = new HttpParams();
    apiUrl = this.url + endpoint + "/" + sujetId;

    const headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');

    return this.httpClient
      .get<Sujet[]>(apiUrl, { params: parameters })
      .pipe(catchError(this.handleError));

  }

  deleteSujetById(sujetId: number): Observable<Sujet[]> {
    let apiUrl: string;
    const endpoint = 'remove-sujet';
    let parameters = new HttpParams();
    apiUrl = this.url + endpoint + "/" + sujetId;

    const headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');

    return this.httpClient
      .delete<Sujet[]>(apiUrl, { params: parameters })
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
