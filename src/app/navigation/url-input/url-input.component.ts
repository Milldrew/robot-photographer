import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreatePhotosService } from 'src/app/services/create-photos.service';
import { GetPhotosService } from 'src/app/services/get-photos.service';

@Component({
  selector: 'app-url-input',
  templateUrl: './url-input.component.html',
  styleUrls: ['./url-input.component.scss'],
})
export class UrlInputComponent implements OnInit {
  photoShootInProgress: boolean;
  @Output()
  newPhotoShoot: EventEmitter<any>;
  url: string = '';
  elementId: string = '';
  constructor(
    private _snackBar: MatSnackBar,
    private readonly getPhotos: GetPhotosService,
    private readonly takePhotos: CreatePhotosService
  ) {
    this.photoShootInProgress = takePhotos.getPhotoShootInProgress();
    this.newPhotoShoot = new EventEmitter<any>();
  }

  ngOnInit(): void {}

  createPhotos() {
    this.photoShootInProgress = true;
    this.takePhotos.startPhotoShoot(this.url).subscribe(
      (payload: any) => {
        this.takePhotos.endPhotoShoot();
        this.photoShootInProgress = this.takePhotos.getPhotoShootInProgress();
        this.newPhotoShoot.emit('get new photos');
      },
      (error) => {
        console.error(error);
        this._snackBar.open(
          'Invalid URL remember to add http:// or https://',
          'DISMISS'
        );
        setTimeout(() => {
          this._snackBar.dismiss();
        }, 7000);
        this.takePhotos.endPhotoShoot();
        this.photoShootInProgress = this.takePhotos.getPhotoShootInProgress();
      }
    );
  }
}
