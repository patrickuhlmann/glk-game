import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Question } from '../model/question';
import { Quiz } from '../model/quiz';
import { Task } from '../model/task';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent {
  @Input() task: Task = { quiz: {} as Quiz } as Task;

  constructor(private snackBar: MatSnackBar) {}

  checkQuiz(quiz: Quiz): boolean {
    return quiz.questions.every((q) => this.checkQuestion(q));
  }

  checkQuestion(question: Question): boolean {
    return question.answers.every((a) => a.checked === a.isCorrect);
  }

  check() {
    if (this.checkQuiz(this.task.quiz)) {
      this.snackBar.open(
        'Du hast die Aufgabe erfolgreich gelöst und kannst mit der nächsten Aufgabe weiterfahren',
        '',
        { duration: 3000 }
      );
    } else {
      this.snackBar.open(
        'Leider ist Deine Lösung nicht korrekt. Versuche es erneut..',
        '',
        {
          duration: 5000,
        }
      );
    }
  }
}
