import { TestBed, inject } from '@angular/core/testing';

import { TaplistService } from './taplist.service';

describe('TaplistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaplistService]
    });
  });

  it('should be created', inject([TaplistService], (service: TaplistService) => {
    expect(service).toBeTruthy();
  }));
});
