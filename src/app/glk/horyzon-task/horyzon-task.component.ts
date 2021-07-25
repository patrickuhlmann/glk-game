import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-horyzon-task',
  templateUrl: './horyzon-task.component.html',
  styleUrls: ['./horyzon-task.component.scss'],
})
export class HoryzonTaskComponent implements OnInit {
  task = TaskService.HORYZON_TASK;

  constructor() {}

  ngOnInit(): void {}
}
