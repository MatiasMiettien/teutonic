import { TestBed } from '@angular/core/testing';

import { JavaRestService } from './java-rest.service';

describe('JavaRestService', () => {
  let service: JavaRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JavaRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
