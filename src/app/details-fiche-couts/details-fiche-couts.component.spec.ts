import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsFicheCoutsComponent } from './details-fiche-couts.component';

describe('DetailsFicheCoutsComponent', () => {
  let component: DetailsFicheCoutsComponent;
  let fixture: ComponentFixture<DetailsFicheCoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsFicheCoutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsFicheCoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
