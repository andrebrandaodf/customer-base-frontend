import { Product } from './../models/product.model';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { MatSnackBar }from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {  


  constructor(private snackBar: MatSnackBar, private http: HttpClient) {

   }

  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition:"right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success'], 
    });
  }

  create(product: Product){
    return this.http.post(`${environment.baseUrl}/products`, product)
  }

  getAll(){
    return this.http.get(`${environment.baseUrl}/products`);
  }

  read(){
    return this.http.get(`${environment.baseUrl}/products`);
  }

  readById(id: number){
    const url = `${environment.baseUrl}/products/${id}`;
    return this.http.get<Product>(url)
  }

  update(product: Product){
    const url = `${environment.baseUrl}/products/${product.id}`;
    return this.http.put<Product>(url, product).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number){
    const url = `${environment.baseUrl}/products/${id}`;
    return this.http.delete(url)
  }

  errorHandler(e: any): Observable<any>{
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
