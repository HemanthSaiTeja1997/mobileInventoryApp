import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Apiservice {
  constructor(private http:HttpClient){}
  
    apiRequest<T>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    url: string = '',
    body?: any
  ): Observable<T> {
    return this.http
      .request<T>(method, url, { body })
      .pipe(catchError(this.handleError));
  }
  handleError(error: any) {
    console.error('Global Error Handler:', error);
    return throwError(() => error);
  }
}
