import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetPhotosService {
  deviceInfo = [
    { fileName: '1366x768.png', name: '1366x768' },
    { fileName: '1929x1080.png', name: '1929x1080' },
    { fileName: 'i-pad-gen-7-landscape.png', name: 'I Pad Gen 7 landscape' },
    { fileName: 'i-pad-gen-7.png', name: 'I Pad Gen 7' },
    { fileName: 'i-pad-mini-landscape.png', name: 'I Pad Mini Landscape' },
    { fileName: 'i-pad-mini.png', name: 'I Pad Mini' },
    { fileName: 'i-pad-pro-11-landscape.png', name: 'I Pad Pro 11 Landscape' },
    { fileName: 'i-pad-pro-11.png', name: 'I Pad Pro 11' },
    { fileName: 'i-phone-13-landscape.png', name: 'I Phone 13 Landscape' },
    {
      fileName: 'i-phone-13-mini-landscape.png',
      name: 'I Phone 13 Mini Landscape',
    },
    { fileName: 'i-phone-13-mini.png', name: 'I Phone 13 Mini' },
    {
      fileName: 'i-phone-13-pro-max-landscape.png',
      name: 'I Phone 13 Pro Max Landscape',
    },
    { fileName: 'i-phone-13-pro-max.png', name: 'I Phone 13 Pro Max' },
    { fileName: 'i-phone-13.png', name: 'I Phone 13' },
    { fileName: 'i-phone-se-landscape.png', name: 'I Phone SE Landscape' },
    { fileName: 'i-phone-se.png', name: 'I Phone SE' },
  ];

  baseUrl = 'http://192.168.0.143:3000/';
  constructor() {}
}
