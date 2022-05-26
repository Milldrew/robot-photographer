import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { GetPhotosService } from './get-photos.service';

@Injectable({
  providedIn: 'root',
})
export class CreatePhotosService {
  photoShootInProgress = false;
  constructor(
    private readonly getPhotos: GetPhotosService,
    private readonly http: HttpClient
  ) {}

  httpOptions = new HttpHeaders({ 'Content-Type': 'application/json' });

  startPhotoShoot(photoShootUrl: string, elementSelector: string) {
    this.photoShootInProgress = true;
    return this.http.post(
      `${this.getPhotos.baseUrl}photographer`,
      { url: photoShootUrl, elementSelector: elementSelector || '' },
      { headers: this.httpOptions }
    );
  }

  endPhotoShoot() {
    this.photoShootInProgress = false;
  }
  getPhotoShootInProgress() {
    return this.photoShootInProgress;
  }
}
