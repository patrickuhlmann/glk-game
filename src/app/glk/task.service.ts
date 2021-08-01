import { Injectable } from '@angular/core';
import { Quiz } from './model/quiz';
import { Task } from './model/task';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  static HORYZON_QUIZ: Quiz = {
    questions: [
      {
        question:
          'Welche Projekte betreut Horyzon aktuell und in welchen Ländern werden sie durchgeführt?',
        answers: [
          {
            answer:
              'Espace Sûr - Ein sicherer Ort - Bildung für Mädchen und Junge Frauen in den Slums von Haiti.',
            checked: false,
            isCorrect: true,
          },
          {
            answer:
              'My Body, My Right, My Future - Jugendliche lernen, welche sexuellen und gesundheitlichen Rechte sie haben und welche Methoden der Familienplanung sie in Anspruch nehmen können, Südsudan.',
            checked: false,
            isCorrect: true,
          },
          {
            answer:
              'Gemeinsam für Frieden und Gerechtigkeit, Gemeinsam mit YGlobal Uganda befähigt Horyzon südsudanesische Jugendliche im Kiryandongo Flüchtlingscamp dazu, sich für Frieden und Gerechtigkeit in Uganda und im Südsudan einzusetzen.',
            checked: false,
            isCorrect: true,
          },
          {
            answer:
              'Paza la Paz - Ein Schritt zum Frieden - Bildung für sozial und wirtschaftlich benachteiligte Jugendliche in Armenquartieren Kolumbiens.',
            checked: false,
            isCorrect: true,
          },
          {
            answer:
              'Wiedereingliederungsprogramm: Wiedereingliederung von Jugendlichen mit Beeinträchtigungen und Traumata. Dieses Programm versucht, ihnen einen Wiedereinstieg in die soziale und berufliche Welt zu ermöglichen, Palästina.',
            checked: false,
            isCorrect: true,
          },
          {
            answer:
              'Joint Advocacy Initiative, Einsatz für Frieden und Menschenrechte. Ein Programm, welches weltweit die Menschen für die schwierige Situation der palästinensischen Bevölkerung sensibilisiert.',
            checked: false,
            isCorrect: true,
          },
        ],
        hint: '',
      },
      {
        question:
          'Wann und warum wurde der dezentrale, Schweiz weite Horyzon 2h-Lauf ins Leben gerufen?',
        answers: [
          {
            answer:
              '2015 als Reaktion auf die Kritik das gewisse Teilnehmer nicht am traditionellen 2h-Lauf partizipieren können.',
            checked: false,
            isCorrect: false,
          },
          {
            answer:
              'Im Jahr 2018 erarbeitete Horyzon ein Konzept zur Fortschreittenden Digitalisierung und der dezentrale Lauf war ein Produkt davon.',
            checked: false,
            isCorrect: false,
          },
          {
            answer:
              '2020 aufgrund der Corona-Pandemie, da viele traditionelle Sponsor*innenläufe nicht stattfinden konnten.',
            checked: false,
            isCorrect: true,
          },
        ],
        hint: '',
      },
      {
        question:
          'Horyzon bietet Mitgliedern von Jugendorganisationen und interessierten Jugendlichen Volontäreinsätze bei den Projektpartnern an. Wie lange dauert ein solches Volontariat in der Regel?',
        answers: [
          {
            answer: '3-6 Monate',
            checked: false,
            isCorrect: true,
          },
          {
            answer: 'Mind. ein Jahr',
            checked: false,
            isCorrect: false,
          },
          {
            answer: 'Das kann jeder selber wählen',
            checked: false,
            isCorrect: false,
          },
        ],
        hint: '',
      },
    ],
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
    questions: [
      {
        question: 'Welche Aussagen über den ESG Day sind korrekt?',
        answers: [
          {
            answer: 'Der ESG Day findet jährlich statt.',
            checked: false,
            isCorrect: true,
          },
          {
            answer: 'Der ESG Day findet alle zwei Jahre statt.',
            checked: false,
            isCorrect: false,
          },
          {
            answer: 'Der ESG Day wird jeweils vom ESG Commitee organisiert.',
            checked: false,
            isCorrect: false,
          },
          {
            answer:
              'Der ESG Day wird jeweils von einem gewählten Land (z. B. Deutschland, Frankreich, ...) organisiert.',
            checked: false,
            isCorrect: true,
          },
          {
            answer:
              'Ein wichtiger Bestandteil des ESG Day ist das Versenden von Postkarten an das organisierende Land.',
            checked: false,
            isCorrect: true,
          },
          {
            answer:
              'Ein wichtiger Bestandteil des ESG Day ist ein Telefonat mit einer Gruppe aus einem anderen Land.',
            checked: false,
            isCorrect: false,
          },
        ],
        hint: '',
      },
      {
        question:
          'Welche Aussagen über das ESG Leadership Training and Seminar sind korrekt?',
        answers: [
          {
            answer: 'Das Treffen dauert jeweils eine Woche.',
            checked: false,
            isCorrect: false,
          },
          {
            answer: 'Das Treffen dauert jeweils vier Tage.',
            checked: false,
            isCorrect: true,
          },
          {
            answer:
              'Es gibt einen Teil für Minderjährige und einen Teil für Erwachsene.',
            checked: false,
            isCorrect: false,
          },
          {
            answer:
              'Sowohl Minderjährige wie auch Erwachsene folgen demselben Programm',
            checked: false,
            isCorrect: true,
          },
        ],
        hint: '',
      },
      {
        question: 'Welche Aussagen über das ESG Jamboree sind korrekt?',
        answers: [
          {
            answer:
              'Es handelt sich um ein Lager an welchem alle Jungscharen von Europa teilnehmen können.',
            checked: false,
            isCorrect: true,
          },
          {
            answer:
              'Das Jamboree 2021 findet unter Berücksichtigung von Corona Massnahmen statt.',
            checked: false,
            isCorrect: false,
          },
          {
            answer:
              'Anstelle des physischen Jamboree 2021 wurde ein Programmpackage zusammengestellt, welches diverse Aktivitäten beinhaltet',
            checked: false,
            isCorrect: true,
          },
        ],
        hint: '',
      },
      {
        question: 'Auf welchen Ebenen finden Unify Konferenzen statt?',
        answers: [
          {
            answer: 'National',
            checked: false,
            isCorrect: true,
          },
          {
            answer: 'Europäisch',
            checked: false,
            isCorrect: true,
          },
          {
            answer: 'Weltweit',
            checked: false,
            isCorrect: true,
          },
        ],
        hint: '',
      },
    ],
  };
  static YMCA_QUIZ: Quiz = {
    questions: [
      {
        question: 'Welche Aussagen über den YMCA World sind korrekt?',
        answers: [
          {
            answer: 'Das Hauptquartier befindet sich in Genf',
            checked: false,
            isCorrect: true,
          },
          {
            answer:
              'Es werden 5 der 17 United Nations Sustainable Development Goals (SDGs) abgedeckt',
            checked: false,
            isCorrect: false,
          },
          {
            answer:
              'Die vier Hauptbereiche sind: Gesundheit, Arbeit, ziviles Engangement und Umwelt.',
            checked: false,
            isCorrect: true,
          },
          {
            answer:
              'Der YMCA setzt primär auf erfahrene Erwachsene, welche die Jungen motivieren und anleiten sollen.',
            checked: false,
            isCorrect: true,
          },
        ],
        hint: '',
      },
      {
        question: 'Welche Länder gehören zum YMCA Europe?',
        answers: [
          {
            answer: 'Deutschland',
            checked: false,
            isCorrect: true,
          },
          {
            answer: 'Frankreich',
            checked: false,
            isCorrect: true,
          },
          {
            answer: 'Lichtenstein',
            checked: false,
            isCorrect: false,
          },
          {
            answer: 'Belgien',
            checked: false,
            isCorrect: false,
          },
          {
            answer: 'Finnland',
            checked: false,
            isCorrect: true,
          },
          {
            answer: 'Schweden',
            checked: false,
            isCorrect: true,
          },
        ],
        hint: '',
      },
      {
        question: 'Welche Programmgruppen führt der YMCA Europe?',
        answers: [
          {
            answer: 'YMCA Civic Engagement Group',
            checked: false,
            isCorrect: false,
          },
          {
            answer: 'YMCA Europe Working Group for Environment',
            checked: false,
            isCorrect: false,
          },
          {
            answer: 'YMCA Europe Working Group on Refugees',
            checked: false,
            isCorrect: true,
          },
          {
            answer: 'Volunteers for Europe',
            checked: false,
            isCorrect: true,
          },
        ],
        hint: '',
      },
    ],
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
    questions: [
      {
        question:
          'Wann findet der Taku Musik der Cevi Region Bern dieses Jahr statt?',
        answers: [
          {
            answer: '12.08.2021 08:00 - 15.08.2021',
            checked: false,
            isCorrect: false,
          },
          {
            answer: '10.-17.10.2021',
            checked: false,
            isCorrect: false,
          },
          {
            answer: '14.-17.10.2021',
            checked: false,
            isCorrect: true,
          },
        ],
        hint: 'Siehe: Webseite der Region Bern unter Cevianerin/Kursangebot/Cevi Kurse',
      },
      {
        question: 'Welchen Kurs bietet Outdoortech nicht an?',
        answers: [
          {
            answer: 'Sarasani- und Seiltechnikkurs',
            checked: false,
            isCorrect: false,
          },
          {
            answer: 'Frauen Pioniertechnikkurs',
            checked: false,
            isCorrect: false,
          },
          {
            answer: 'Männer Pioniertechnikkurs',
            checked: false,
            isCorrect: true,
          },
        ],
        hint: 'Siehe: Webseite von Outdoortech (Region Bern) unter Lager/ Kurse',
      },
      {
        question:
          'Was ist die grosse Leidenschaft des Leitungsteams des Hattricks?',
        answers: [
          {
            answer: 'Basketball und Kinder',
            checked: false,
            isCorrect: false,
          },
          {
            answer: 'Fussball und Jesus',
            checked: false,
            isCorrect: true,
          },
          {
            answer: 'Posaunen und Singen',
            checked: false,
            isCorrect: false,
          },
        ],
        hint: 'Siehe: Webseite des Cevi Basel unter Angebote',
      },
      {
        question:
          'Ab welchem Alter, sollten Jungscharkinder nach dem Tatkundefilter das Alarmieren können?',
        answers: [
          {
            answer: '10 Jahre',
            checked: false,
            isCorrect: true,
          },
          {
            answer: '12 Jahre',
            checked: false,
            isCorrect: false,
          },
          {
            answer: '13 Jahre',
            checked: false,
            isCorrect: false,
          },
        ],
        hint: 'Siehe: Webseite der Region Winterthur-Schaffhausen unter Cevi-Online/Tatkunde',
      },
      {
        question: 'Wo ist das Ladenlokal des Cevi Zürich?',
        answers: [
          {
            answer: 'Sihlstrasse 33, 8001 Zürich',
            checked: false,
            isCorrect: true,
          },
          {
            answer: 'Bahnhofstrasse 24, 8001 Zürich',
            checked: false,
            isCorrect: false,
          },
          {
            answer: 'Stauffacherstrasse 16, 8001 Zürich',
            checked: false,
            isCorrect: false,
          },
        ],
        hint: 'Siehe: Webseite der Cevi Zürich (Stadt) unter Angebote/Lokal/Ort/Standort',
      },
      {
        question: 'Welches Rezept gibt es im Cevi Wiki?',
        answers: [
          {
            answer: 'Älplermagronen hindersi',
            checked: false,
            isCorrect: false,
          },
          {
            answer: 'Chüssischlacht auf dem Feuer',
            checked: false,
            isCorrect: true,
          },
          {
            answer: 'Urchige Marshmallow-Sandwichs',
            checked: false,
            isCorrect: false,
          },
        ],
        hint: 'Siehe: Webseite Cevi Wiki (Region Zürich) unter Rezepte',
      },
    ],
  };
  static CEVI_SCHWEIZ_QUIZ: Quiz = {
    questions: [
      {
        question:
          'Welcher der folgenden Slogans steht in der Strategie 2030 des Cevi Schweiz?',
        answers: [
          {
            answer: 'Der Cevi ist wirtschaftlich relevant',
            checked: false,
            isCorrect: false,
          },
          {
            answer:
              'Der Cevi ist eine Gemeinschaft von Kindern und Jugendlichen',
            checked: false,
            isCorrect: false,
          },
          {
            answer: 'Der Cevi steht auf christlichem Fundament',
            checked: false,
            isCorrect: true,
          },
          {
            answer:
              'Der Cevi baut auf starke Strukturen und schlanke Beziehungen',
            checked: false,
            isCorrect: false,
          },
        ],
        hint: 'Unter Portrait findet ihr das Leitbild, sowie die Strategie 2030 des Cevi Schweiz. Lest das Leitbild und schaut euch die 4 Hauptslogans der Strategie 2030 an.',
      },
      {
        question: 'Wann findet des Cevi-Tag 2021 statt?',
        answers: [
          {
            answer: '11. September 2021',
            checked: false,
            isCorrect: true,
          },
          {
            answer: '18. September 2021',
            checked: false,
            isCorrect: false,
          },
          {
            answer: '25. September 2021',
            checked: false,
            isCorrect: false,
          },
        ],
        hint: 'Events und Kurse: Die nationalen Events/Kurse des Cevi Schweiz, sowie deren Jahresplan findest du auf der Webseite unter Events und Ausbildung.',
      },
      {
        question:
          'Welche Themenbereiche werden unter Hilfsmittel/Themen/Merkblätter aufgegriffen?',
        answers: [
          {
            answer: 'LGBTQ, Interkulturelle Öffnung, Finanzen',
            checked: false,
            isCorrect: false,
          },
          {
            answer: 'Fröschli, Handbuch Abteilungsleitende, Prävention',
            checked: false,
            isCorrect: false,
          },
          {
            answer: 'Versicherungen, Krisenmanagement, Vereinsgründung',
            checked: false,
            isCorrect: true,
          },
        ],
        hint: 'Hilfsmittel/ Themen/ Merkblätter: Verschaffe dir einen groben Überblick zu welchen Themen es hier Unterlagen gibt.',
      },
    ],
  };

  public static HORYZON_TASK = {
    title: 'Horyzon',
    link: '/tasks/horyzon',
    code: 'WDZQ',
    quiz: TaskService.HORYZON_QUIZ,
    locked: true,
    solved: false,
  };
  public static CEVI_ALPIN_TASK = {
    title: 'Cevi Alpin',
    link: '/tasks/cevi_alpin',
    code: 'JTRM',
    quiz: TaskService.CEVI_ALPIN_QUIZ,
    locked: true,
    solved: false,
  };
  public static CEVI_MILITAER_TASK = {
    title: 'Cevi Militär',
    link: '/tasks/cevi_militaer',
    code: 'NFAA',
    quiz: TaskService.CEVI_MILITAER_QUIZ,
    locked: true,
    solved: false,
  };
  public static ESG_UNIFY_TASK = {
    title: 'ESG, Unify',
    link: '/tasks/esg_unify',
    code: 'GGUB',
    quiz: TaskService.ESG_UNIFY_QUIZ,
    locked: true,
    solved: false,
  };
  public static YMCA_TASK = {
    title: 'YMCA',
    link: '/tasks/ymca',
    code: 'TUTM',
    quiz: TaskService.YMCA_QUIZ,
    locked: true,
    solved: false,
  };
  public static YWCA_TASK = {
    title: 'YWCA',
    link: '/tasks/ywca',
    code: 'FXKN',
    quiz: TaskService.YWCA_QUIZ,
    locked: true,
    solved: false,
  };
  public static AG_INT_TASK = {
    title: 'AG International',
    link: '/tasks/ag_int',
    code: 'YWUJ',
    quiz: TaskService.AG_INT_QUIZ,
    locked: true,
    solved: false,
  };
  public static CEVI_VIELFALT_TASK = {
    title: 'Cevi Vielfalt',
    link: '/tasks/vielfalt',
    code: 'PNAL',
    quiz: TaskService.CEVI_VIELFALT_QUIZ,
    locked: true,
    solved: false,
  };
  public static REGIONEN_TASK = {
    title: 'Regionen',
    link: '/tasks/regionen',
    code: 'MLGB',
    quiz: TaskService.REGIONEN_QUIZ,
    locked: true,
    solved: false,
  };
  public static CEVI_SCHWEIZ_TASK = {
    title: 'Cevi Schweiz',
    link: '/tasks/cevi_schweiz',
    code: 'XKJW',
    quiz: TaskService.CEVI_SCHWEIZ_QUIZ,
    locked: true,
    solved: false,
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

  public init() {
    const taskState = this.storage.getTaskState();
    if (taskState !== null) {
      this.tasks.forEach((t) => {
        const state = taskState.find(
          (ts) => ts !== null && ts.identifier === t.title
        );
        if (state !== undefined) {
          t.locked = state.locked;
          t.solved = state.solved;
        }
      });
    }
  }

  public getAllTasks(): Task[] {
    return this.tasks;
  }

  public taskFromCode(code: string): Task | undefined {
    return this.tasks.find((t) => t.code === code);
  }

  public isUrlUnlocked(url: string): boolean {
    const task = this.tasks.find((t) => t.link === url);
    return task !== undefined && !task.locked;
  }

  public unlockTask(task: Task) {
    task.locked = false;
    this.storage.saveTaskState(this.tasks);
  }

  public unlockAllTasks() {
    this.tasks.forEach((t) => (t.locked = false));
    this.storage.saveTaskState(this.tasks);
  }

  public lockAllTasks() {
    this.tasks.forEach((t) => (t.locked = true));
    this.storage.saveTaskState(this.tasks);
  }

  public solveAllTasks() {
    this.tasks.forEach((t) => (t.solved = true));
    this.storage.saveTaskState(this.tasks);
  }

  public unsolveAllTasks() {
    this.tasks.forEach((t) => (t.solved = false));
    this.storage.saveTaskState(this.tasks);
  }

  public solveTask(task: Task) {
    task.solved = true;
    this.storage.saveTaskState(this.tasks);
  }
}
