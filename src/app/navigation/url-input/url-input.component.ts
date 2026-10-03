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
  elementSelector: string = '';
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
    if (this.photoShootInProgress) return;
    // "example.com" is what people type; the service only takes http(s) URLs.
    let url = this.url.trim();
    if (!url) return;
    if (!/^https?:\/\//i.test(url)) url = 'https://' + url;
    this.url = url;
    this.photoShootInProgress = true;
    this.takePhotos.startPhotoShoot(url, this.elementSelector).subscribe(
      (payload: any) => {
        this.takePhotos.endPhotoShoot();
        this.photoShootInProgress = this.takePhotos.getPhotoShootInProgress();
        const ok = /^succ?ess$/.test(payload.responseStatus);
        this._snackBar.open(ok ? 'Photos ready ✓' : payload.responseStatus, 'DISMISS', {
          verticalPosition: 'top',
        });
        setTimeout(() => {
          this._snackBar.dismiss();
        }, 7000);
        if (ok) this.newPhotoShoot.emit('get new photos');
      },
      (error) => {
        console.error(error);
        this._snackBar.open(
          'There was an unidentified server error',
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
