import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-ag-int-task',
  templateUrl: './ag-int-task.component.html',
  styleUrls: ['./ag-int-task.component.scss'],
})
export class AgIntTaskComponent implements OnInit {
  task = TaskService.AG_INT_TASK;

  constructor() {}

  ngOnInit(): void {}
}
