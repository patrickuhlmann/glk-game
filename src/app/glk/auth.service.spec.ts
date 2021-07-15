import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be true with valid code', () => {
    expect(service.check('HASL')).toBe(true);
  });

  it('should be false with invalid code', () => {
    expect(service.check('ZZZZ')).toBe(false);
  });
});
