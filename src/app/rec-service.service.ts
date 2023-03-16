import { Injectable } from '@angular/core';
import { Summoner } from './summoner';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, ObservableInput, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Recommendation } from './recommendation';
import { HMError } from './error';
import { ErrorWrapper } from './errorWrapper';

@Injectable({
  providedIn: 'root'
})
export class RecServiceService {
  private createURL = "https://oguingq7nn6tyymts6zy24v5sm0nkcfb.lambda-url.eu-north-1.on.aws/post/"
  private getURL = "https://oguingq7nn6tyymts6zy24v5sm0nkcfb.lambda-url.eu-north-1.on.aws/get/"


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  public error: string = ""
  constructor(
    private http: HttpClient,
  ) { }

  postSummoner(summoner: string): Observable<ErrorWrapper> {
    //this.createURL = "https://localhost:7158/post/"

    let ret: Observable<any> = new Observable()
    try {
      
      ret = this.http.post<JSON>(`${this.createURL}${summoner}`, this.httpOptions).pipe(
        catchError(this.handleError)
      );
    } catch (error: any) {
      this.error = error.message
      ret = new Observable
    }
    
    return ret;
  }

  getSummoner(summoner: string): Observable<ErrorWrapper> {
    //this.getURL = "https://localhost:7158/get/"
    let ret: Observable<any> = new Observable()
    try {
      
      ret = this.http.get<JSON>(`${this.getURL}${summoner}`, this.httpOptions).pipe(
        catchError(this.handleError)
      );
    } catch (error: any) {
      this.error = error.message
      ret = new Observable
    }
    
    return ret;
  }


  private handleError(error: HttpErrorResponse, caught: Observable<JSON>) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
    } 
    else if (error.status === 409){ 
      let retError: ErrorWrapper = {
        body : null,
        error: {message: error.error.detail}
      }
      return of(retError)
    }
    else if (error.status === 404){ 
      let retError: ErrorWrapper = {
        body : null,
        error: {message: error.error.detail}
      }
      return of(retError)
    }
    else if (error.status === 406){ 
      let retError: ErrorWrapper = {
        body : null,
        error: {message: error.error.detail}
      }
      return of(retError)
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
