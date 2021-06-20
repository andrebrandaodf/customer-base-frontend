import { Observable, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MediaVideo } from '../models/media-video.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MediaVideoService {
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-sucess'],
    });
  }

  create(mediaVideo: MediaVideo) {
    return this.http.post(`${environment.baseUrl}/media`, mediaVideo);
  }

  getAll() {
    return this.http.get(`${environment.baseUrl}/media`);
  }

  read() {
    return this.http.get(`${environment.baseUrl}/media`);
  }

  readById(id: number) {
    const url = `${environment.baseUrl}/media/${id}`;
    return this.http.get<MediaVideo>(url);
  }

  update(mediaVideo: MediaVideo): Observable<MediaVideo> {
    const url = `${environment.baseUrl}/media/${mediaVideo.id}`;
    return this.http.put<MediaVideo>(url, mediaVideo);
  }

  delete(id: number) {
    const url = `${environment.baseUrl}/media/${id}`;
    return this.http.delete(url);
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }
}
