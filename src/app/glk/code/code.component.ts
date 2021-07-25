import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { StorageService } from '../storage.service';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
})
export class CodeComponent {
  code = '';

  constructor(
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private taskService: TaskService,
    private router: Router,
    private storageService: StorageService
  ) {}

  checkCode() {
    if (this.authService.check(this.code)) {
      const task = this.taskService.taskFromCode(this.code);
      this.snackBar.open(
        'Der Code ist korrekt. Aufgabe ' + task?.title + ' freigeschaltet',
        '',
        { duration: 3000 }
      );
      this.taskService.unlockTask(task!);
      this.router.navigate([task!.link]);
    } else {
      this.snackBar.open('Leider ist der Code nicht korrekt.', '', {
        duration: 5000,
      });
    }
  }
}
