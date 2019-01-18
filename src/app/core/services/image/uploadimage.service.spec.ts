import { TestBed } from '@angular/core/testing';

import { UploadimageService } from './uploadimage.service';

describe('UploadimageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UploadimageService = TestBed.get(UploadimageService);
    expect(service).toBeTruthy();
  });
});
