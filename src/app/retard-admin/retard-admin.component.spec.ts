import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetardAdminComponent } from './retard-admin.component';

describe('RetardAdminComponent', () => {
  let component: RetardAdminComponent;
  let fixture: ComponentFixture<RetardAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetardAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetardAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
