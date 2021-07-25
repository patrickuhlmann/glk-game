import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-cevi-militaer-task',
  templateUrl: './cevi-militaer-task.component.html',
  styleUrls: ['./cevi-militaer-task.component.scss'],
})
export class CeviMilitaerTaskComponent implements OnInit {
  task = TaskService.CEVI_MILITAER_TASK;

  constructor() {}

  ngOnInit(): void {}
}
