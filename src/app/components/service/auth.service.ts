import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class AuthService { 

  private usuarioAutenticado: boolean = false;
  
    constructor(private httpClient: HttpClient){

    }

   login(user: User):Observable<any>
   {
       return this.httpClient.post(`${environment.baseUrl}/authenticate`, user)
   } 

   usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }
}