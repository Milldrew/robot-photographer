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
  public reRender() {
    setTimeout(() => {
      this.imageUrl = `${this.getPhotos.baseUrl}${
        this.deviceInfo.fileName
      }?${Date.now()}`;
    }, 10000);
  }
  ngOnChanges() {
    setTimeout(() => {
      this.imageUrl = `${this.getPhotos.baseUrl}${
        this.deviceInfo.fileName
      }?${Date.now()}`;
    }, 10000);
  }
  ngOnInit(): void {
    this.imageUrl = `${this.getPhotos.baseUrl}${this.deviceInfo.fileName}`;
  }
}
