import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuStagiaireComponent } from './menu-stagiaire.component';

describe('MenuStagiaireComponent', () => {
  let component: MenuStagiaireComponent;
  let fixture: ComponentFixture<MenuStagiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuStagiaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
