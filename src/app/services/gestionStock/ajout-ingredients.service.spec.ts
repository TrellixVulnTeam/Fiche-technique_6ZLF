import { TestBed } from '@angular/core/testing';

import { AjoutIngredientsService } from './ajout-ingredients.service';

describe('AjoutIngredientsService', () => {
  let service: AjoutIngredientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjoutIngredientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
