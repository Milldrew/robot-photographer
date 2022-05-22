import { Component, OnInit } from '@angular/core';
import { CreatePhotosService } from 'src/app/services/create-photos.service';
import { GetPhotosService } from 'src/app/services/get-photos.service';

@Component({
  selector: 'app-url-input',
  templateUrl: './url-input.component.html',
  styleUrls: ['./url-input.component.scss'],
})
export class UrlInputComponent implements OnInit {
  url: string = '';
  constructor(
    private readonly getPhotos: GetPhotosService,
    private readonly takePhotos: CreatePhotosService
  ) {}

  ngOnInit(): void {}

  createPhotos() {
    this.takePhotos.startPhotoShoot(this.url);
  }
}
