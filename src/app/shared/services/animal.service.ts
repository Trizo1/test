import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  apiUrl: string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAllPets(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/pets`).pipe(catchError(this.handleError));
  }

  getOnePet(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/pets/${id}`).pipe(catchError(this.handleError));
  }

  getPetHealth(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/pets/health/${id}`).pipe(catchError(this.handleError));
  }

  getPetVaccination(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/pets/vaccination/${id}`).pipe(catchError(this.handleError));
  }

  getPetSanitation(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/pets/sanitation/${id}`).pipe(catchError(this.handleError));
  }

  getPetOwner(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/pets/owner/${id}`).pipe(catchError(this.handleError));
  }

  postPetMain(data) {
    return this.http.post(`${this.apiUrl}/api/pets/main`, data).pipe(catchError(this.handleError));
  }

  postPetAdditional(data, id) {
    return this.http.post(`${this.apiUrl}/api/pets/additional/${id}`, data).pipe(catchError(this.handleError));
  }

  postPetCatchInfo(data, id) {
    return this.http.post(`${this.apiUrl}/api/pets/catch/${id}`, data).pipe(catchError(this.handleError));
  }

  postPetMove(data, id) {
    return this.http.post(`${this.apiUrl}/api/pets/move/${id}`, data).pipe(catchError(this.handleError));
  }

  postPetResponsible(data, id) {
    return this.http.post(`${this.apiUrl}/api/pets/responsible/${id}`, data).pipe(catchError(this.handleError));
  }

  postPetOwner(data, id) {
    return this.http.post(`${this.apiUrl}/api/pets/owner/${id}`, data).pipe(catchError(this.handleError));
  }

  postPetVactination(data, id) {
    return this.http.post(`${this.apiUrl}/api/pets/vactination/${id}`, data).pipe(catchError(this.handleError));
  }

  postPetSanitation(data, id) {
    return this.http.post(`${this.apiUrl}/api/pets/sanitation/${id}`, data).pipe(catchError(this.handleError));
  }

  postPetHealth(data, id) {
    return this.http.post(`${this.apiUrl}/api/pets/health/${id}`, data).pipe(catchError(this.handleError));
  }

  updatePetMain(data, id) {
    return this.http.put(`${this.apiUrl}/api/pets/main/${id}`, data).pipe(catchError(this.handleError));
  }

  updatePetAdditional(data, id) {
    return this.http.put(`${this.apiUrl}/api/pets/additional/${id}`, data).pipe(catchError(this.handleError));
  }

  updatePetCatchInfo(data, id) {
    return this.http.put(`${this.apiUrl}/api/pets/catch/${id}`, data).pipe(catchError(this.handleError));
  }

  updatePetMove(data, id) {
    return this.http.put(`${this.apiUrl}/api/pets/move/${id}`, data).pipe(catchError(this.handleError));
  }

  updatePetResponsible(data, id) {
    return this.http.put(`${this.apiUrl}/api/pets/responsible/${id}`, data).pipe(catchError(this.handleError));
  }

  getReadyPets(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/pets/ready/all`).pipe(catchError(this.handleError));
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
