import { Component, Input, OnInit } from '@angular/core';
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
  constructor(private readonly getPhotos: GetPhotosService) {}
  ngOnChanges() {
    this.imageUrl = `${this.getPhotos.basseUrl}${this.deviceInfo.fileName}`;
  }
  ngOnInit(): void {}
}
