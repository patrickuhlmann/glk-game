import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-regionen-task',
  templateUrl: './regionen-task.component.html',
  styleUrls: ['./regionen-task.component.scss'],
})
export class RegionenTaskComponent implements OnInit {
  task = TaskService.REGIONEN_TASK;

  constructor() {}

  ngOnInit(): void {}
}
