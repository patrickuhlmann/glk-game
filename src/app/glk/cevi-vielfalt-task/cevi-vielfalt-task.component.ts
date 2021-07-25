import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-cevi-vielfalt-task',
  templateUrl: './cevi-vielfalt-task.component.html',
  styleUrls: ['./cevi-vielfalt-task.component.scss'],
})
export class CeviVielfaltTaskComponent implements OnInit {
  task = TaskService.CEVI_VIELFALT_TASK;

  constructor() {}

  ngOnInit(): void {}
}
