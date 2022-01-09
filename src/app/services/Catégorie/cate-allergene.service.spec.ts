import { TestBed } from '@angular/core/testing';

import { CateAllergeneService } from './cate-allergene.service';

describe('CateAllergeneService', () => {
  let service: CateAllergeneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CateAllergeneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
