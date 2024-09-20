import { TestBed } from '@angular/core/testing';

import { NavabarService } from './navabar.service';

describe('NavabarService', () => {
  let service: NavabarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavabarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
