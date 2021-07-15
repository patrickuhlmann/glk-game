import { TestBed } from '@angular/core/testing';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthGuard } from './auth.guard';
import { TaskService } from './task.service';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let mockTaskService: TaskService;
  const router = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [{ provide: Router, useValue: router }],
    });
    guard = TestBed.inject(AuthGuard);
    mockTaskService = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should activate if the route is unlocked', () => {
    spyOn(mockTaskService, 'isUrlUnlocked').and.returnValue(true);
    expect(
      guard.canActivate(
        {} as ActivatedRouteSnapshot,
        { url: 'some' } as RouterStateSnapshot
      )
    ).toBe(true);
  });

  it('should not activate if the route is not unlocked', () => {
    spyOn(mockTaskService, 'isUrlUnlocked').and.returnValue(false);
    expect(
      guard.canActivate(
        {} as ActivatedRouteSnapshot,
        { url: 'some' } as RouterStateSnapshot
      )
    ).toBe(false);
  });
});
