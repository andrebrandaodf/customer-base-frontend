import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Product } from './../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  create(product: Product) {
    return this.http.post(`${environment.baseUrl}/products`, product);
  }

  getAll() {
    return this.http.get(`${environment.baseUrl}/products`);
  }

  read() {
    return this.http.get(`${environment.baseUrl}/products`);
  }

  readById(id: number) {
    const url = `${environment.baseUrl}/products/${id}`;
    return this.http.get<Product>(url);
  }

  update(product: Product) {
    const url = `${environment.baseUrl}/products/${product.id}`;
    return this.http.put<Product>(url, product).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number) {
    const url = `${environment.baseUrl}/products/${id}`;
    return this.http.delete(url);
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }
}
