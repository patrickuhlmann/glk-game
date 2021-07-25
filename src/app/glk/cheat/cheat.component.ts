import { Component, OnInit, ViewChild } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../model/task';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cheat',
  templateUrl: './cheat.component.html',
  styleUrls: ['./cheat.component.scss'],
})
export class CheatComponent {
  displayedColumns: string[] = ['task', 'code'];
  dataSource: MatTableDataSource<Task>;

  constructor(private snackBar: MatSnackBar, private taskService: TaskService) {
    this.dataSource = new MatTableDataSource(taskService.getAllTasks());
  }

  unlockAllTasks() {
    this.taskService.unlockAllTasks();
    this.taskService.unsolveAllTasks();
    this.snackBar.open('Alle Aufgaben freigeschaltet', '', { duration: 3000 });
  }

  solveAllTasks() {
    this.taskService.solveAllTasks();
    this.taskService.unlockAllTasks();
    this.snackBar.open('Alle Aufgaben gelöst', '', { duration: 3000 });
  }

  lockAllTasks() {
    this.taskService.lockAllTasks();
    this.taskService.unsolveAllTasks();
    this.snackBar.open('Alle Aufgaben gesperrrt', '', { duration: 3000 });
  }
}
