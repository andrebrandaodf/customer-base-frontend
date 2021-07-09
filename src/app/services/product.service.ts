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
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  create(product: FormData) {
    return this.http.post(`${environment.baseUrl}/product`, product);
  }

  getAll() {
    return this.http.get(`${environment.baseUrl}/product`);
  }

  read() {
    return this.http.get(`${environment.baseUrl}/product`);
  }

  readById(id: number) {
    const url = `${environment.baseUrl}/product/${id}`;
    return this.http.get<Product>(url);
  }

  update(product: Product) {
    const url = `${environment.baseUrl}/product/${product.id}`;
    return this.http.put<Product>(url, product).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number) {
    const url = `${environment.baseUrl}/product/${id}`;
    return this.http.delete(url);
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }
}
