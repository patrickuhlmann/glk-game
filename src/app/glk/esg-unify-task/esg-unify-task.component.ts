import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-esg-unify-task',
  templateUrl: './esg-unify-task.component.html',
  styleUrls: ['./esg-unify-task.component.scss'],
})
export class EsgUnifyTaskComponent implements OnInit {
  task = TaskService.ESG_UNIFY_TASK;

  constructor() {}

  ngOnInit(): void {}
}
