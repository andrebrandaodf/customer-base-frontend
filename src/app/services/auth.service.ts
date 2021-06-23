import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public showNavBarEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  private usuarioAutenticado: boolean = false;

  constructor(private httpClient: HttpClient, private router: Router) { }

  login(user: User): Observable<any> {
    return this.httpClient.post(`${environment.baseUrl}/authenticate`, user);
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }

  logout() {
    this.usuarioAutenticado = false;
    this.showNavBar(false);
    this.router.navigate(['/login']);
  }

  private showNavBar(ifShow: boolean) {
    this.showNavBarEmitter.emit(ifShow);
  }

}
