import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Question } from '../model/question';
import { Quiz } from '../model/quiz';
import { Task } from '../model/task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  @Input() task: Task = { quiz: { questions: [] } as Quiz } as Task;

  constructor(
    private snackBar: MatSnackBar,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    if (this.task.solved) {
      this.task.quiz.questions.forEach((q) =>
        q.answers.forEach((a) => {
          if (a.isCorrect) {
            a.checked = true;
          }
        })
      );
    }
  }

  checkQuiz(quiz: Quiz): boolean {
    return quiz.questions.every((q) => this.checkQuestion(q));
  }

  checkQuestion(question: Question): boolean {
    return question.answers.every((a) => a.checked === a.isCorrect);
  }

  wrongQuestions(quiz: Quiz): number[] {
    const wrongQuestions = [];
    for (let i = 0; i < quiz.questions.length; i++) {
      if (!this.checkQuestion(quiz.questions[i])) {
        wrongQuestions.push(i + 1);
      }
    }

    return wrongQuestions;
  }

  check() {
    if (this.checkQuiz(this.task.quiz)) {
      this.snackBar.open(
        'Du hast die Aufgabe erfolgreich gelöst und kannst mit der nächsten Aufgabe weiterfahren',
        '',
        { duration: 3000 }
      );
      this.taskService.solveTask(this.task);
    } else {
      this.snackBar.open(
        'Folgende Fragen wurden nicht korrekt beantwortet: ' +
          this.wrongQuestions(this.task.quiz).join(', ') +
          '. Versuche es erneut..',
        '',
        {
          duration: 5000,
        }
      );
    }
  }
}
