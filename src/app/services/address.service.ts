import { map, catchError } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Address } from '../models/address.model';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  baseUrl = "http://localhost:8080/client";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {

  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  create(address: Address): Observable<Address> {
    return this.http.post<Address>(this.baseUrl, address).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Address[]> {
    return this.http.get<Address[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Address> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Address>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(address: Address): Observable<Address> {
    const url = `${this.baseUrl}/${address.id}`;
    return this.http.put<Address>(url, address).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Address> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Address>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
} 