import { Observable, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
import { Video } from '../models/video.model';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-sucess'],
    });
  }

  create(video: Video) {
    return this.http.post(`${environment.baseUrl}/video`, video);
  }

  getAll() {
    return this.http.get(`${environment.baseUrl}/video`);
  }

  read() {
    return this.http.get(`${environment.baseUrl}/video`);
  }

  readById(id: number) {
    const url = `${environment.baseUrl}/video/${id}`;
    return this.http.get<Video>(url);
  }

  update(video: Video): Observable<Video> {
    const url = `${environment.baseUrl}/video/${video.id}`;
    return this.http.put<Video>(url, video);
  }

  delete(id: number) {
    const url = `${environment.baseUrl}/video/${id}`;
    return this.http.delete(url);
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }
}
