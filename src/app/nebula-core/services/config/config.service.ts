import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Config } from './config';
import { appDefaultConfig } from './app-default.config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private config: Config;

  constructor(private http: HttpClient) { }

  get appConfig(): Config {

    if(!this.config){
      this.config = appDefaultConfig;
    } 
    return this.config;
  }

  initConfig(configUrl: string = 'assets/app.config.json') {

    return this.http.get<Config>(configUrl)
      .pipe(
        //retry(3), // retry a failed request up to 3 times
        tap(
          (data: Config) => {
            this.config = { ...data }
          },
          //() => {
          //  this.config = appDefaultConfig;
          //}
        ),
        
        //catchError(this.handleError) // then handle the error
      );

  }

  // initConfigResponse(configUrl: string = 'assets/app.config.json'): Observable<HttpResponse<Config>> {
  //   return this.http.get<Config>(
  //     configUrl, { observe: 'response' });
  // }

  // private handleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error.message);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong,
  //     console.error(
  //       `Backend returned code ${error.status}, ` +
  //       `body was: ${error.error}`);
  //   }
  //   // return an observable with a user-facing error message
  //   return throwError(
  //     'Something bad happened; please try again later.');
  // };



}

