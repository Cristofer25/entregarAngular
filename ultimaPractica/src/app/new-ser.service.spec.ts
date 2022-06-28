import { TestBed } from '@angular/core/testing';

import { NewSerService } from './new-ser.service';

describe('NewSerService', () => {
  let service: NewSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
