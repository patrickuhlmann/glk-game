import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-ywca-task',
  templateUrl: './ywca-task.component.html',
  styleUrls: ['./ywca-task.component.scss'],
})
export class YwcaTaskComponent implements OnInit {
  task = TaskService.YWCA_TASK;

  constructor() {}

  ngOnInit(): void {}
}
