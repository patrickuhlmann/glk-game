import { Injectable } from '@angular/core';
import { Task } from './model/task';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  UNLOCKED_TASKS_KEY = 'unlockedTasks';

  constructor() {}

  getUnlockedTasks(): Task[] | null {
    const data = localStorage.getItem(this.UNLOCKED_TASKS_KEY);
    if (data === null) {
      return null;
    } else {
      return JSON.parse(data) as Task[];
    }
  }

  clearUnlockedTasks() {
    localStorage.removeItem(this.UNLOCKED_TASKS_KEY);
  }

  addUnlockedTask(task: Task) {
    const existingTasks = this.getUnlockedTasks();
    if (existingTasks == null) {
      this.setUnlockedTasks([task]);
    } else if (existingTasks.find((t) => t.title === task.title) == null) {
      existingTasks.push(task);
      this.setUnlockedTasks(existingTasks);
    }
  }

  setUnlockedTasks(data: Task[]) {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(this.UNLOCKED_TASKS_KEY, jsonData);
  }
}
