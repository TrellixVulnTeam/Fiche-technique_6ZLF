import { TestBed } from '@angular/core/testing';

import { CategorieFicheService } from './categorie-fiche.service';

describe('CategorieFicheService', () => {
  let service: CategorieFicheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorieFicheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
