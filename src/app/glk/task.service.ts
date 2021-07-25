import { Injectable } from '@angular/core';
import { Quiz } from './model/quiz';
import { Task } from './model/task';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  static HORYZON_QUIZ: Quiz = {
    questions: [],
  };
  static CEVI_ALPIN_QUIZ: Quiz = {
    questions: [
      {
        question: 'Wie lautet das Motto des Cevi Alpins?',
        answers: [
          {
            answer:
              'Herausgefordert und beschenkt durch Begegnungen mit Gott, miteinander und mit der Bergwelt!',
            checked: false,
            isCorrect: true,
          },
          {
            answer: 'Gemeinsam gehen wir hoch hinaus',
            checked: false,
            isCorrect: false,
          },
          {
            answer:
              'Bereichernde Erfahrungen, Kamaradschaftlichkeit und Begegnungen mit Gott',
            checked: false,
            isCorrect: false,
          },
        ],
        hint: 'Siehe Leitbild',
      },
      {
        question:
          'Wie findest du heraus, ob die Tour deinen Fähigkeiten entspricht?',
        answers: [
          {
            answer: 'Das sehe ich dann wenn ich teilnehme',
            checked: false,
            isCorrect: false,
          },
          {
            answer:
              'Einteilung in Schwierigkeitsstufen (A, B, C) und konditionelle Hinweise zur Länge der Tour im Programm.',
            checked: false,
            isCorrect: true,
          },
          {
            answer:
              'Ich werde jeweils eingeladen, mein Betreuer schaut für mich.',
            checked: false,
            isCorrect: false,
          },
          {
            answer: 'Ich frage im Zweifelsfall beim Tourenleiter nach',
            checked: false,
            isCorrect: true,
          },
        ],
        hint: '',
      },
      {
        question: 'Wie viel kostet der Jahresbeitrag?',
        answers: [
          { answer: 'gratis', checked: false, isCorrect: false },
          { answer: '20 CHF', checked: false, isCorrect: false },
          { answer: '40 CHF', checked: false, isCorrect: true },
        ],
        hint: '',
      },
    ],
  };
  static CEVI_MILITAER_QUIZ: Quiz = {
    questions: [],
  };
  static ESG_UNIFY_QUIZ: Quiz = {
    questions: [],
  };
  static YMCA_QUIZ: Quiz = {
    questions: [],
  };
  static YWCA_QUIZ: Quiz = {
    questions: [],
  };
  static AG_INT_QUIZ: Quiz = {
    questions: [],
  };
  static CEVI_VIELFALT_QUIZ: Quiz = {
    questions: [],
  };
  static REGIONEN_QUIZ: Quiz = {
    questions: [],
  };
  static CEVI_SCHWEIZ_QUIZ: Quiz = {
    questions: [],
  };

  public static HORYZON_TASK = {
    title: 'Horyzon',
    link: '/tasks/horyzon',
    code: 'WDZQ',
    quiz: TaskService.HORYZON_QUIZ,
  };
  public static CEVI_ALPIN_TASK = {
    title: 'Cevi Alpin',
    link: '/tasks/cevi_alpin',
    code: 'JTRM',
    quiz: TaskService.CEVI_ALPIN_QUIZ,
  };
  public static CEVI_MILITAER_TASK = {
    title: 'Cevi Militär',
    link: '/tasks/cevi_militaer',
    code: 'NFAA',
    quiz: TaskService.CEVI_MILITAER_QUIZ,
  };
  public static ESG_UNIFY_TASK = {
    title: 'ESG, Unify',
    link: '/tasks/esg_unify',
    code: 'GGUB',
    quiz: TaskService.ESG_UNIFY_QUIZ,
  };
  public static YMCA_TASK = {
    title: 'YMCA',
    link: '/tasks/ymca',
    code: 'TUTM',
    quiz: TaskService.YMCA_QUIZ,
  };
  public static YWCA_TASK = {
    title: 'YWCA',
    link: '/tasks/ywca',
    code: 'FXKN',
    quiz: TaskService.YWCA_QUIZ,
  };
  public static AG_INT_TASK = {
    title: 'AG International',
    link: '/tasks/ag_int',
    code: 'YWUJ',
    quiz: TaskService.AG_INT_QUIZ,
  };
  public static CEVI_VIELFALT_TASK = {
    title: 'Cevi Vielfalt',
    link: '/tasks/vielfalt',
    code: 'PNAL',
    quiz: TaskService.CEVI_VIELFALT_QUIZ,
  };
  public static REGIONEN_TASK = {
    title: 'Regionen',
    link: '/tasks/regionen',
    code: 'MLGB',
    quiz: TaskService.REGIONEN_QUIZ,
  };
  public static CEVI_SCHWEIZ_TASK = {
    title: 'Cevi Schweiz',
    link: '/tasks/cevi_schweiz',
    code: 'XKJW',
    quiz: TaskService.CEVI_SCHWEIZ_QUIZ,
  };

  private tasks: Task[] = [
    TaskService.HORYZON_TASK,
    TaskService.CEVI_ALPIN_TASK,
    TaskService.CEVI_MILITAER_TASK,
    TaskService.ESG_UNIFY_TASK,
    TaskService.YMCA_TASK,
    TaskService.YWCA_TASK,
    TaskService.AG_INT_TASK,
    TaskService.CEVI_VIELFALT_TASK,
    TaskService.REGIONEN_TASK,
    TaskService.CEVI_SCHWEIZ_TASK,
  ];

  constructor(private storage: StorageService) {}

  public getAllTasks(): Task[] {
    return this.tasks;
  }

  public taskFromCode(code: string): Task | undefined {
    return this.tasks.find((t) => t.code === code);
  }

  public isUrlUnlocked(url: string): boolean {
    const unlockedTasks = this.storage.getUnlockedTasks();
    if (unlockedTasks == null) {
      return false;
    }
    const uriTask = unlockedTasks.find((t) => t.link == url);
    return uriTask != null;
  }
}
