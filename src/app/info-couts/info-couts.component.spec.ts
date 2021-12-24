import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCoutsComponent } from './info-couts.component';

describe('InfoCoutsComponent', () => {
  let component: InfoCoutsComponent;
  let fixture: ComponentFixture<InfoCoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCoutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
