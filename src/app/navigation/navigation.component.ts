import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { GetPhotosService } from '../services/get-photos.service';
import { PhotoContainerComponent } from './photo-container/photo-container.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  @ViewChild(PhotoContainerComponent) photos: PhotoContainerComponent;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private getPhotos: GetPhotosService
  ) {}
  deviceInfo = this.getPhotos.deviceInfo;
  hashTag = '#';
  getNewPhotos() {
    this.deviceInfo = this.getPhotos.deviceInfo.map((info) => ({ ...info }));
  }
}
