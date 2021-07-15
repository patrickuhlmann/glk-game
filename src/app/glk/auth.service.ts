import { Injectable } from '@angular/core';
import { TaskService } from './task.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private taskService: TaskService) {}

  public check(code: string): boolean {
    return this.taskService.taskFromCode(code) !== undefined;
  }
}
