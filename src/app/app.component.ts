import { Component } from '@angular/core';
import { CreatePhotosService } from './services/create-photos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'client';
  constructor(private readonly createPhotos: CreatePhotosService) {}

  ngOnInit() {
    /*this.createPhotos.startPhotoShoot('https://google.com').subscribe(
      (payload: any) => console.log(payload),
      (error: any) => console.log(error)
    );
  */
  }
}
