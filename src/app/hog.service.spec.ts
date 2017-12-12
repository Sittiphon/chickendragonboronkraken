/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HogService } from './hog.service';

describe('HogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HogService]
    });
  });

  it('should ...', inject([HogService], (service: HogService) => {
    expect(service).toBeTruthy();
  }));
});
