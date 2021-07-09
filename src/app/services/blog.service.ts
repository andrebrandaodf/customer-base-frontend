import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Blog } from '../models/blog.model';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  create(blog: FormData) {
    return this.http.post(`${environment.baseUrl}/blog`, blog);
  }

  getAll() {
    return this.http.get(`${environment.baseUrl}/blog`);
  }

  read() {
    return this.http.get(`${environment.baseUrl}/blog`);
  }

  readById(id: number) {
    const url = `${environment.baseUrl}/blog/${id}`;
    return this.http.get<Blog>(url);
  }

  update(blog: FormData) {
    const url = `${environment.baseUrl}/blog`;
    return this.http.put<Blog>(url, blog).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number) {
    const url = `${environment.baseUrl}/blog/${id}`;
    return this.http.delete(url);
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }

  uploadFile(url: FormData) {
    return this.http.post(`${environment.baseUrl}/storage/uploadFile`, url);

  }
}
