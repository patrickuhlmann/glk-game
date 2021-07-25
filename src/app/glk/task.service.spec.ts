import { TestBed } from '@angular/core/testing';
import { TaskService } from './task.service';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return task with code', () => {
    expect(service.taskFromCode('TUTM')?.title).toBe('YMCA');
  });

  it('should return undefined if code not found', () => {
    expect(service.taskFromCode('ZZZZ')).toBe(undefined);
  });

  it('should return false if a task is not unlocked', () => {
    const task = service.getAllTasks().find((t) => t.link === '/tasks/horyzon');
    task!.locked = true;
    expect(service.isUrlUnlocked('/tasks/horyzon')).toBe(false);
  });

  it('should return true if a task is unlocked', () => {
    const task = service.getAllTasks().find((t) => t.link === '/tasks/horyzon');
    task!.locked = false;
    expect(service.isUrlUnlocked('/tasks/horyzon')).toBe(true);
  });
});
