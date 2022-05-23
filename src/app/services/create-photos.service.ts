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

  startPhotoShoot(photoShootUrl: string) {
    this.photoShootInProgress = true;
    console.log(photoShootUrl);
    return this.http.post(
      `${this.getPhotos.baseUrl}photographer`,
      { url: photoShootUrl },
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
