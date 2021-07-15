import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageService);
    service.clearUnlockedTasks();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return null after clear', () => {
    service.clearUnlockedTasks();
    expect(service.getUnlockedTasks()).toBe(null);
  });

  it('should return the saved data', () => {
    const tasks = [{ title: 'Horyzon', link: '/tasks/horyzon', code: 'WDZQ' }];
    service.setUnlockedTasks(tasks);
    const retrievedTasks = service.getUnlockedTasks();
    if (retrievedTasks === null) {
      fail('tasks should not be null');
    } else {
      expect(retrievedTasks.length).toBe(1);
      expect(retrievedTasks[0].title).toBe('Horyzon');
    }
  });

  it('should add task if not in list', () => {
    const task = { title: 'Horyzon', link: '/tasks/horyzon', code: 'WDZQ' };
    service.addUnlockedTask(task);
    const retrievedTasks = service.getUnlockedTasks();
    if (retrievedTasks === null) {
      fail('tasks should not be null');
    } else {
      expect(retrievedTasks.length).toBe(1);
      expect(retrievedTasks[0].title).toBe('Horyzon');
    }
  });

  it('should not add task if already in list', () => {
    const task = { title: 'Horyzon', link: '/tasks/horyzon', code: 'WDZQ' };
    const tasks = [{ title: 'Horyzon', link: '/tasks/horyzon', code: 'WDZQ' }];
    service.setUnlockedTasks(tasks);
    service.addUnlockedTask(task);
    const retrievedTasks = service.getUnlockedTasks();
    if (retrievedTasks === null) {
      fail('tasks should not be null');
    } else {
      expect(retrievedTasks.length).toBe(1);
      expect(retrievedTasks[0].title).toBe('Horyzon');
    }
  });
});
