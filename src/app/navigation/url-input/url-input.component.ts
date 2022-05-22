import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CreatePhotosService } from 'src/app/services/create-photos.service';
import { GetPhotosService } from 'src/app/services/get-photos.service';

@Component({
  selector: 'app-url-input',
  templateUrl: './url-input.component.html',
  styleUrls: ['./url-input.component.scss'],
})
export class UrlInputComponent implements OnInit {
  @Output()
  newPhotoShoot: EventEmitter<any>;
  url: string = '';
  constructor(
    private readonly getPhotos: GetPhotosService,
    private readonly takePhotos: CreatePhotosService
  ) {
    this.newPhotoShoot = new EventEmitter<any>();
  }

  ngOnInit(): void {}

  createPhotos() {
    this.newPhotoShoot.emit('get new photos');
    this.takePhotos.startPhotoShoot(this.url);
  }
}
