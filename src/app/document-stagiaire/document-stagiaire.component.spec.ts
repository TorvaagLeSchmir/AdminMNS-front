import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentStagiaireComponent } from './document-stagiaire.component';

describe('DocumentStagiaireComponent', () => {
  let component: DocumentStagiaireComponent;
  let fixture: ComponentFixture<DocumentStagiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentStagiaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
