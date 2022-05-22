import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { GetPhotosService } from './get-photos.service';

@Injectable({
  providedIn: 'root',
})
export class CreatePhotosService {
  constructor(
    private readonly getPhotos: GetPhotosService,
    private readonly http: HttpClient
  ) {}

  httpOptions = new HttpHeaders({ 'Content-Type': 'application/json' });

  startPhotoShoot(photoShootUrl: string) {
    console.log(photoShootUrl);
    this.http
      .post(
        `${this.getPhotos.baseUrl}photographer`,
        { url: photoShootUrl },
        { headers: this.httpOptions }
      )
      .pipe(tap(() => console.log('successful photoshoot')))
      .subscribe(() => console.log('request sent'));
  }
}
