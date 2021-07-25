import { TestBed } from '@angular/core/testing';
import { StorageService } from './storage.service';
import { Task } from './model/task';
import { TaskService } from './task.service';
import { Quiz } from './model/quiz';

describe('TaskService', () => {
  let service: TaskService;
  let mockStorageService: StorageService;
  const tasks: Task[] = [
    {
      title: 'Horyzon',
      link: '/tasks/horyzon',
      code: 'WDZQ',
      quiz: {} as Quiz,
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
    mockStorageService = TestBed.inject(StorageService);
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
    spyOn(mockStorageService, 'getUnlockedTasks').and.returnValue(tasks);
    expect(service.isUrlUnlocked('/some')).toBe(false);
  });

  it('should return true if a task is unlocked', () => {
    spyOn(mockStorageService, 'getUnlockedTasks').and.returnValue(tasks);
    expect(service.isUrlUnlocked('/tasks/horyzon')).toBe(true);
  });
});
