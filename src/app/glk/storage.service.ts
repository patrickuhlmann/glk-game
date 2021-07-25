import { Injectable } from '@angular/core';
import { Task } from './model/task';
import { TaskState } from './model/taskState';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  TASK_STATE_KEY = 'task_state';

  constructor() {}

  getTaskState(): TaskState[] | null {
    const data = localStorage.getItem(this.TASK_STATE_KEY);
    if (data === null) {
      return null;
    } else {
      return JSON.parse(data) as TaskState[];
    }
  }

  clearTasksState() {
    localStorage.removeItem(this.TASK_STATE_KEY);
  }

  saveTaskState(data: Task[]) {
    const taskState = data.map((t) => ({
      identifier: t.title,
      solved: t.solved,
      locked: t.locked,
    }));
    const jsonData = JSON.stringify(taskState);
    localStorage.setItem(this.TASK_STATE_KEY, jsonData);
  }
}
