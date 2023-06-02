import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetardStagiaireComponent } from './retard-stagiaire.component';

describe('RetardStagiaireComponent', () => {
  let component: RetardStagiaireComponent;
  let fixture: ComponentFixture<RetardStagiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetardStagiaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetardStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
