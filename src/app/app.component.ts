import { Component } from '@angular/core';
import { TaskService } from './glk/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private taskService: TaskService) {
    taskService.init();
  }
}
