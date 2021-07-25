import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-cevi-alpin-task',
  templateUrl: './cevi-alpin-task.component.html',
  styleUrls: ['./cevi-alpin-task.component.scss'],
})
export class CeviAlpinTaskComponent implements OnInit {
  task = TaskService.CEVI_ALPIN_TASK;

  constructor() {}

  ngOnInit(): void {}
}
