import { TestBed } from '@angular/core/testing';

import { HahaformService } from './hahaform.service';

describe('HahaformService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HahaformService = TestBed.get(HahaformService);
    expect(service).toBeTruthy();
  });
});
