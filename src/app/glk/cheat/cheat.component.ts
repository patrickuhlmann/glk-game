import { Component, OnInit, ViewChild } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../model/task';
import { MatTableDataSource } from '@angular/material/table';
import { StorageService } from '../storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cheat',
  templateUrl: './cheat.component.html',
  styleUrls: ['./cheat.component.scss'],
})
export class CheatComponent {
  displayedColumns: string[] = ['task', 'code'];
  dataSource: MatTableDataSource<Task>;

  constructor(
    private snackBar: MatSnackBar,
    private taskService: TaskService,
    private storageService: StorageService
  ) {
    this.dataSource = new MatTableDataSource(taskService.getAllTasks());
  }

  lockAllTasks() {
    this.storageService.clearUnlockedTasks();
    this.snackBar.open('Alle Aufgaben gesperrt', '', { duration: 3000 });
  }

  unlockAllTasks() {
    this.storageService.setUnlockedTasks(this.taskService.getAllTasks());
    this.snackBar.open('Alle Aufgaben freigeschaltet', '', { duration: 3000 });
  }
}
