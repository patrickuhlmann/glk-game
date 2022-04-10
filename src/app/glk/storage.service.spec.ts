import { TestBed } from '@angular/core/testing';
import { Quiz } from './model/quiz';
import { Task } from './model/task';

import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageService);
    service.clearTasksState();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return null after clear', () => {
    service.clearTasksState();
    expect(service.getTaskState()).toBe(null);
  });

  it('should return the saved data', () => {
    const tasks: Task[] = [
      {
        title: 'Horyzon',
        link: '/tasks/horyzon',
        code: 'WDZQ',
        quiz: {} as Quiz,
        locked: false,
        solved: true,
        optional: false,
      },
    ];
    service.saveTaskState(tasks);
    const retrievedTasks = service.getTaskState();
    if (retrievedTasks === null) {
      fail('tasks should not be null');
    } else {
      expect(retrievedTasks.length).toBe(1);
      expect(retrievedTasks[0].locked).toBe(false);
    }
  });
});
