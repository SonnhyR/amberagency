import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { streamerProfileGuard } from './streamer-profile-guard';

describe('streamerProfileGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => streamerProfileGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
