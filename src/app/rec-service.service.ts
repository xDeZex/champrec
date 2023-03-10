import { Injectable } from '@angular/core';
import { Summoner } from './summoner';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, ObservableInput, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Recommendation } from './recommendation';

@Injectable({
  providedIn: 'root'
})
export class RecServiceService {
  private createURL = "https://localhost:7158/post/"
  private getURL = "https://localhost:7158/get/"
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  public error: string = ""
  constructor(
    private http: HttpClient,
  ) { }

  postSummoner(summoner: Summoner): Observable<Summoner> {
    //https://localhost:7158/post/{{summoner}}
    console.log(`${this.createURL}${summoner.name}`)
    let ret: Observable<any> = new Observable()
    try {
      
      ret = this.http.post<JSON>(`${this.createURL}${summoner.name}`, this.httpOptions).pipe(
        catchError(this.handleError)
      );
      console.log("FWAAW")
    } catch (error: any) {
      console.log("ERROR")
      this.error = error.message
      ret = new Observable
    }
    console.log("AFTER")
    
    return ret;
  }

  getSummoner(summoner: Summoner): Observable<Recommendation> {
    //https://localhost:7158/post/{{summoner}}
    console.log(`${this.getURL}${summoner.name}`)
    let ret: Observable<any> = new Observable()
    try {
      
      ret = this.http.get<JSON>(`${this.getURL}${summoner.name}`, this.httpOptions).pipe(
        catchError(this.handleError)
      );
      console.log("FWAAW")
    } catch (error: any) {
      console.log("ERROR")
      this.error = error.message
      ret = new Observable
    }
    console.log("AFTER")
    
    return ret;
  }


  private handleError(error: HttpErrorResponse, caught: Observable<JSON>) {
    console.log("ERRROR HANDL")
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } 
    else if (error.status === 409){ 
      console.log("TEST")
      let summoner: Summoner = {
        name: error.error.detail,
        error: true
      }
      return of(summoner)
    }
    else if (error.status === 404){ 
      console.log("TEST")
      let recommendation: Recommendation = {
        one: error.error.detail,
        two: error.error.detail,
        three: error.error.detail,
        error: true
      }
      return of(recommendation)
    }
    else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return new Observable<JSON>()
  }
}
