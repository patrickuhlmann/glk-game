import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
})
export class CodeComponent implements OnInit {
  code = '';

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  checkCode() {
    if (this.code === '1234') {
      this.snackBar.open('Der Code ist korrekt.');
    } else {
      this.snackBar.open('Leider ist der Code nicht korrekt.');
    }
    console.log(this.code);
  }
}
