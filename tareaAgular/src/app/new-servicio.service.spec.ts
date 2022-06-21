import { TestBed } from '@angular/core/testing';

import { NewServicioService } from './new-servicio.service';

describe('NewServicioService', () => {
  let service: NewServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
