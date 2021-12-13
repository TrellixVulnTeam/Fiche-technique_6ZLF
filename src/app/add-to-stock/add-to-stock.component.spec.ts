import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToStockComponent } from './add-to-stock.component';

describe('AddToStockComponent', () => {
  let component: AddToStockComponent;
  let fixture: ComponentFixture<AddToStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
