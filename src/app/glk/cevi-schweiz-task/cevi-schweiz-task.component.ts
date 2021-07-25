import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-cevi-schweiz-task',
  templateUrl: './cevi-schweiz-task.component.html',
  styleUrls: ['./cevi-schweiz-task.component.scss'],
})
export class CeviSchweizTaskComponent implements OnInit {
  task = TaskService.CEVI_SCHWEIZ_TASK;

  constructor() {}

  ngOnInit(): void {}
}
