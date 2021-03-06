import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { GetPhotosService } from '../../services/get-photos.service';

@Component({
  selector: 'app-photo-container',
  templateUrl: './photo-container.component.html',
  styleUrls: ['./photo-container.component.scss'],
})
export class PhotoContainerComponent implements OnInit {
  @Input()
  deviceInfo: any;
  imageUrl: string;
  constructor(
    private readonly getPhotos: GetPhotosService,
    private changeDetection: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const intervalId = setInterval(() => {
      this.imageUrl = `${this.getPhotos.baseUrl}${
        this.deviceInfo.fileName
      }?${Date.now()}`;
    }, 3000);
    this.imageUrl = `${this.getPhotos.baseUrl}${
      this.deviceInfo.fileName
    }?${Date.now()}`;
    setTimeout(() => {
      clearInterval(intervalId);
    }, 10000);
  }
}
