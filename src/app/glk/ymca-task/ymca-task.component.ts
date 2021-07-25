import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-ymca-task',
  templateUrl: './ymca-task.component.html',
  styleUrls: ['./ymca-task.component.scss'],
})
export class YmcaTaskComponent implements OnInit {
  task = TaskService.YMCA_TASK;

  constructor() {}

  ngOnInit(): void {}
}
