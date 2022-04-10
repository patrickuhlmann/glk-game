import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CheckboxAnswer } from '../model/answer';
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
  @Input() minNumCorrect: number | undefined;

  constructor(
    private snackBar: MatSnackBar,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    if (this.task.solved) {
      this.task.quiz.questions.forEach((q) =>
        q.answers.forEach((a) => {
          switch (a.type) {
            case 'checkbox': {
              if (a.isCorrect) {
                a.checked = true;
              }
              break;
            }
            case 'textbox': {
              a.text = a.solution;
            }
          }
        })
      );
    }
  }

  checkQuiz(quiz: Quiz): boolean {
    if (this.minNumCorrect === undefined) {
      return quiz.questions.every((q) => this.checkQuestion(q));
    } else {
      return (
        quiz.questions.filter((q) => this.checkQuestion(q)).length >=
        this.minNumCorrect
      );
    }
  }

  checkQuestion(question: Question): boolean {
    return question.answers.every((a) => {
      switch (a.type) {
        case 'checkbox':
          return a.checked === a.isCorrect;
        case 'textbox':
          return a.text === a.solution;
      }
    });
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
