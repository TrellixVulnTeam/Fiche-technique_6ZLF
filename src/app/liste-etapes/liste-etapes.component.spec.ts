import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEtapesComponent } from './liste-etapes.component';

describe('ListeEtapesComponent', () => {
  let component: ListeEtapesComponent;
  let fixture: ComponentFixture<ListeEtapesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeEtapesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeEtapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
