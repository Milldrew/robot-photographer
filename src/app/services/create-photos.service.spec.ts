import { TestBed } from '@angular/core/testing';

import { CreatePhotosService } from './create-photos.service';

describe('CreatePhotosService', () => {
  let service: CreatePhotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatePhotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
