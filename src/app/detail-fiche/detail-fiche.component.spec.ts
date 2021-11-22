import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFicheComponent } from './detail-fiche.component';

describe('DetailFicheComponent', () => {
  let component: DetailFicheComponent;
  let fixture: ComponentFixture<DetailFicheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailFicheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
