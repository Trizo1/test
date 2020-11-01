import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ShelterService {

  apiUrl: string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getShelters(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/shelters`).pipe(catchError(this.handleError));
  }

  getOneShelter(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/shelters/${id}`).pipe(catchError(this.handleError));
  }

  getPetsByShelter(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/pets/shelterwithpets/${id}`);
  }


  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
