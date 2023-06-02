import { TestBed } from '@angular/core/testing';

import { StagiaireGuard } from './stagiaire.guard';

describe('StagiaireGuard', () => {
  let guard: StagiaireGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StagiaireGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
