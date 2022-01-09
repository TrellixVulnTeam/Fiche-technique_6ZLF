import { TestBed } from '@angular/core/testing';

import { TypeIngredientsService } from './types-ingredients.service';

describe('TypeIngredientsService', () => {
  let service: TypeIngredientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeIngredientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
