import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './auth.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const token = localStorage.getItem('token')

    if (token) {
      req = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
    }

    return next.handle(req)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Erro de client-side ou de rede
      console.error('Ocorreu um erro:', error.error.message);
    } else {
      // Erro retornando pelo backend
      console.error(
        `Código do erro ${error.status}, ` +
        `Erro: ${JSON.stringify(error.error)}`);
    }
    // retornar um observable com uma mensagem amigavel.
    return throwError('Ocorreu um erro, tente novamente');
  }
}
