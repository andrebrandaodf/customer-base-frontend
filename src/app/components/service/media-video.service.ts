import { Observable, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MediaVideo } from '../models/media-video.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MediaVideoService {
  
 

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {

   }

   showMessage(msg: string, isError: boolean = false): void{
     this.snackBar.open(
       msg, 'x',{
         duration: 3000,
         horizontalPosition:"right",
         verticalPosition: "top",
         panelClass: isError ? ['msg-error'] : ['msg-sucess'],
      }
     )
   }

   create(mediaVideo: MediaVideo){
    return this.http.post(`${environment.baseUrl}/medias`, mediaVideo);
  }

  getAll(){
  //   let headers = new HttpHeaders({
  //     "Content-Type":  "application/json",
  //     "Accept": "application/json",
  //     "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0ZTI3IiwiaXNBZG1pbiI6dHJ1ZSwiZXhwIjoxNjIzNjQxMDc2LCJpYXQiOjE2MjM2MjMwNzZ9.W7Ypzl-1Z88MHEDnBNNzf3OVTneaz-VeeNl5ZFAnxRazJcMWOheVnErkYUzRlH7avtpc1zvhJAPvD3AYTw7LeQ"
  //   });
  // let httpOptions = {
  //     headers: headers
  //   };
  // return this.http.get(`${environment.baseUrl}/medias`,httpOptions);
  return this.http.get(`${environment.baseUrl}/medias`);
  }

  read(){
    return this.http.get(`${environment.baseUrl}/medias`)
  }

  readById(id: number){
    const url = `${environment.baseUrl}/medias/${id}`;
    return this.http.get<MediaVideo>(url)
   }

  update(mediaVideo: MediaVideo): Observable<MediaVideo>{
    const url = `${environment.baseUrl}/medias/${mediaVideo.id}`;
    return this.http.put<MediaVideo>(url, mediaVideo);
  }

  delete(id: number){
    const url = `${environment.baseUrl}/medias/${id}`;
    return this.http.delete(url)
  }

  errorHandler(e: any): Observable<any>{
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
