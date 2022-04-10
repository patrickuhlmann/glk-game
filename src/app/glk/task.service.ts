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
            text: 'Haiti: Espace Sûr - Ein sicherer Ort - Bildung für Mädchen und Junge Frauen in den Slums von Haiti.',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
          {
            text: 'Kolumbien: Paza la Paz - Ein Schritt zum Frieden - Bildung für sozial und wirtschaftlich benachteiligte Jugendliche in Armenquartieren Kolumbiens.',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
          {
            text: 'Deutschland: Safe Home - Bezahlbarer Wohnraum - Unterstützt Familien mit geringem Einkommen bei der Wohnungssuche.',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: 'Südsudan: My Body, My Right, My Future - Jugendliche lernen, welche sexuellen und gesundheitlichen Rechte sie haben und welche Methoden der Familienplanung sie in Anspruch nehmen können, Südsudan.',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
        ],
        hint: 'Siehe unter Projekte + Themen / Engagement weltweit',
      },
      {
        question:
          'Wann und warum wurde der dezentrale, Schweiz weite Horyzon 2h-Lauf ins Leben gerufen?',
        answers: [
          {
            text: '2015 als Reaktion auf die Kritik das gewisse Teilnehmer nicht am traditionellen 2h-Lauf partizipieren können.',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: 'Im Jahr 2018 erarbeitete Horyzon ein Konzept zur Fortschreittenden Digitalisierung und der dezentrale Lauf war ein Produkt davon.',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: '2020 aufgrund der Corona-Pandemie, da viele traditionelle Sponsor*innenläufe nicht stattfinden konnten.',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
        ],
        hint: 'Siehe unter Spenden + Unterstützen / Horyzon 2h- Challenge',
      },
      {
        question:
          'Horyzon bietet Mitgliedern von Jugendorganisationen und interessierten Jugendlichen Volontäreinsätze bei den Projektpartnern an. Wie lange dauert ein solches Volontariat in der Regel?',
        answers: [
          {
            text: '3-6 Monate',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
          {
            text: 'Mind. ein Jahr',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: 'Das kann jeder selber wählen',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
        ],
        hint: 'Siehe unter Spenden + Unterstützen / Volontariat',
      },
    ],
  };
  static CEVI_ALPIN_QUIZ: Quiz = {
    questions: [
      {
        question: 'Wie lautet das Motto des Cevi Alpins?',
        answers: [
          {
            text: 'Herausgefordert und beschenkt durch Begegnungen mit Gott, miteinander und mit der Bergwelt!',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
          {
            text: 'Gemeinsam gehen wir hoch hinaus',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: 'Bereichernde Erfahrungen, Kamaradschaftlichkeit und Begegnungen mit Gott',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
        ],
        hint: 'Siehe Verein / Leitbild',
      },
      {
        question:
          'Wie findest du heraus, ob die Tour deinen Fähigkeiten entspricht?',
        answers: [
          {
            text: 'Das sehe ich dann wenn ich teilnehme',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: 'Einteilung in Schwierigkeitsstufen (A, B, C) und konditionelle Hinweise zur Länge der Tour im Programm.',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
          {
            text: 'Ich werde jeweils eingeladen, mein Betreuer schaut für mich.',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: 'Ich frage im Zweifelsfall beim Tourenleiter nach',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
        ],
        hint: '',
      },
      {
        question: 'Wie viel kostet der Jahresbeitrag?',
        answers: [
          {
            text: 'gratis',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: '20 CHF',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          { text: '40 CHF', checked: false, isCorrect: true, type: 'checkbox' },
        ],
        hint: '',
      },
    ],
  };
  static CEVI_MILITAER_QUIZ: Quiz = {
    questions: [
      {
        question:
          'Unsere Stiftungsurkunde umschreibt den Zweck unserer Organisation, dieser lautet:',
        answers: [
          {
            text: 'A: Förderung des Wohlbefindens der Wehrpflichtigen in Kriegszeiten',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: 'B: Förderung des Wohlbefindens der Wehrpflichtigen in Friedens- und Kriegszeiten',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
          {
            text: 'C: Förderung des Wehrpflichtigen in Friedens- und Kriegszeiten ',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
        ],
        hint: 'Unter Ressourcen / Downloads findest du die Statuten.',
      },
      {
        question:
          'Der CEVIMIL unterstützt dienstleistende der Armee und des Zivildienstes in folgenden Bereichen:',
        answers: [
          {
            text: '1: Literatur – Freizeit – Beratung',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
          {
            text: '2: Beratung – Literatur – Familienferien',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: '3: Beratung – Freizeit – Stellensuche',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
        ],
        hint: 'Siehe Über uns / Was wir tun',
      },
      {
        question:
          'An welchem Wochentag ist unsere telefonische Beratungslinie bis um 23:30 Uhr erreichbar?',
        answers: [
          {
            text: 'X: Montag',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: 'R: Dienstag',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: 'S: Mittwoch',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
        ],
        hint: 'Siehe Beratung',
      },
      {
        question: 'Wann wurde der Cevi Militär Service gegründet?',
        answers: [
          {
            text: '7: 1856',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: '8: 1913',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
          {
            text: '9: 1968',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
        ],
        hint: 'Siehe Über uns / Geschichte',
      },
      {
        question:
          'Um vom Beratungsdienst des CEVIMIL profitieren zu können, muss man folgender Glaubensgemeinschaft angehören:',
        answers: [
          {
            text: 'a: christlich (bspw. katholisch, reformiert …)',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: 'e: keiner (wir verstehen uns als überkonfessionelles Fürsorgewerk)',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
          {
            text: 'k: andere (beispielsweise muslimisch, jüdisch …)',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
        ],
        hint: '',
      },
    ],
  };
  static ESG_UNIFY_QUIZ: Quiz = {
    questions: [
      {
        question: 'Welche Aussagen über den ESG Day sind korrekt?',
        answers: [
          {
            text: 'Der ESG Day findet jährlich statt.',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
          {
            text: 'Der ESG Day findet alle zwei Jahre statt.',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: 'Der ESG Day wird jeweils vom ESG Commitee organisiert.',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: 'Der ESG Day wird jeweils von einem gewählten Land (z. B. Deutschland, Frankreich, ...) organisiert.',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
          {
            text: 'Ein wichtiger Bestandteil des ESG Day ist das Versenden von Postkarten an das organisierende Land.',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
          {
            text: 'Ein wichtiger Bestandteil des ESG Day ist ein Telefonat mit einer Gruppe aus einem anderen Land.',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
        ],
        hint: '',
      },
      {
        question:
          'Welche Aussagen über das ESG Leadership Training and Seminar sind korrekt?',
        answers: [
          {
            text: 'Das Treffen dauert jeweils eine Woche.',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: 'Das Treffen dauert jeweils vier Tage.',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
          {
            text: 'Es gibt einen Teil für Minderjährige und einen Teil für Erwachsene.',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
          {
            text: 'Sowohl Minderjährige wie auch Erwachsene folgen demselben Programm',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
        ],
        hint: '',
      },
      /*{
        question: 'Welche Aussagen über das ESG Jamboree sind korrekt?',
        answers: [
          {
            text:
              'Es handelt sich um ein Lager an welchem alle Jungscharen von Europa teilnehmen können.',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
          {
            text:
              'Das Jamboree 2021 findet unter Berücksichtigung von Corona Massnahmen statt.',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text:
              'Anstelle des physischen Jamboree 2021 wurde ein Programmpackage zusammengestellt, welches diverse Aktivitäten beinhaltet',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
        ],
        hint: '',
      },*/
      {
        question: 'Wann und wo findet das nächste ESG LTS statt?',
        answers: [
          {
            text: 'September in Berlin',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: 'August in Köln/Cologne',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
          {
            text: 'August in München/Munich',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: 'September in Hamburg',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
        ],
        hint: '',
      },
      {
        question: 'Auf welchen Ebenen finden Unify Konferenzen statt?',
        answers: [
          {
            text: 'National',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
          {
            text: 'Europäisch',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
          {
            text: 'Weltweit',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
        ],
        hint: '',
      },
      {
        question: 'Wo findet die nächste Unify-Konferenz statt?',
        answers: [
          {
            text: 'Berlin',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: 'Wien',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
          {
            text: 'Zürich',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: 'Stockholm',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
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
            text: 'Das Hauptquartier befindet sich in Genf',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
          {
            text: 'Es werden 5 der 17 United Nations Sustainable Development Goals (SDGs) abgedeckt',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: 'Die vier Hauptbereiche sind: Gesundheit, Arbeit, ziviles Engangement und Umwelt.',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
          {
            text: 'Der YMCA setzt primär auf erfahrene Erwachsene, welche die Jungen motivieren und anleiten sollen.',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
        ],
        hint: '',
      },
      {
        question: 'Welche Länder gehören zum YMCA Europe?',
        answers: [
          {
            text: 'Deutschland',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
          {
            text: 'Frankreich',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
          {
            text: 'Lichtenstein',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: 'Belgien',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: 'Finnland',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
          {
            text: 'Schweden',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
        ],
        hint: '',
      },
      {
        question: 'Welche Programmgruppen führt der YMCA Europe?',
        answers: [
          {
            text: 'YMCA Civic Engagement Group',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: 'YMCA Europe Working Group for Environment',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: 'YMCA Europe Working Group on Refugees',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
          {
            text: 'Volunteers for Europe',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
        ],
        hint: '',
      },
    ],
  };
  static YWCA_QUIZ: Quiz = {
    questions: [
      {
        question: 'Welche Länder haben den World YWCA gegründet?',
        answers: [
          {
            text: 'Schweiz',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: 'Grossbritannien',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
          {
            text: 'Norwegen',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
          {
            text: 'Schweden',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
          {
            text: 'Deutschland',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: 'USA',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
        ],
        hint: '',
      },
      {
        question: 'Wie viele Länder sind Mitglied im European YWCA?',
        answers: [
          {
            text: '27',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
          {
            text: '34',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: '28',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: '23',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
        ],
        hint: '',
      },
      {
        question: 'Wer sind die Gründerinnen des YWCA?',
        answers: [
          {
            text: 'Miriam May',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: 'Lady Mary Kinnaird',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
          {
            text: 'Emma Robarts',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
          {
            text: 'Florence Vache',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: 'Matthias Kohl',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
        ],
        hint: '',
      },
      {
        question:
          'In elchem Rhythmus  finde das General Assembly (GA) des YWCA statt?',
        answers: [
          {
            text: 'Jedes Jahr',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: 'Alle 2 Jahre',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
          {
            text: 'Alle 4 Jahre',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
        ],
        hint: '',
      },
    ],
  };
  static AG_INT_QUIZ: Quiz = {
    questions: [
      {
        question: 'Welches internationale Lager besucht Luchs als nächstes?',
        answers: [
          {
            text: '',
            solution: 'Kajo',
            type: 'textbox',
          },
        ],
        hint: 'Du kannst ihn einfach fragen ;D',
      },
      {
        question: 'Welches ist unsere aktuellste Insta-Story?',
        answers: [
          {
            text: 'ESG LTS',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
          {
            text: 'Ag International Abend',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: 'Norwegenlager',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
        ],
        hint: '',
      },
      /*{
        question: 'Wer ist Mitglied in der AG International',
        answers: [
          {
            text: 'Bismarck',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
          {
            text: 'Luchs',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
          {
            text: 'Fuchs',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: 'Bär',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
        ],
        hint: '',
      },*/
      /*{
        question: 'Was ist der nächste Event der AG International?',
        answers: [
          {
            text: 'Grillieren in Deutschland',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: 'Besuch einer Delegation aus dem Kosovo',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: 'ESG Jamboree Onlinezusammenkunft',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
        ],
        hint: '',
      },
      {
        question: 'Wo kann ich mich über AG International Events informieren?',
        answers: [
          {
            text: 'AG International Abend vom 12. November',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
          {
            text: 'Cevi Schweiz Blog',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
          {
            text: 'Anschlag auf der Toilette im Seki',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
        ],
        hint: '',
      },*/
      {
        question:
          'Welches internationale Lager besucht Bismarck bald bereits zum Dritten Mal?',
        answers: [
          {
            text: '',
            solution: 'Gnist',
            type: 'textbox',
          },
        ],
        hint: 'Du kannst ihn einfach fragen ;D',
      },
      {
        question: 'Was macht die AG International?',
        answers: [
          {
            text: 'Landesgrenze bewachen und alle die sich für den Cevi interessieren begrüssen',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: 'Blöcke in Leiterkursen',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
          {
            text: 'Jedes Jahr eine neue Sprache lernen',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: 'Internationale Lager besuchen',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
          {
            text: 'Alle Flughäfen der Welt einmal besuchen',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: 'Internationale Posten/Spiele an regionalen Anlässen',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
        ],
        hint: '',
      },
    ],
  };
  static CEVI_VIELFALT_QUIZ: Quiz = {
    questions: [
      {
        question: 'Wieviele Studenten nehmen am Y Learning teil?',
        answers: [
          {
            text: '500',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: '1000',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
          {
            text: '5000',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: '10000',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
        ],
        hint: '',
      },
      {
        question:
          'Wie hoch ist der Prozentsatz der Teilnehmer, die angeben durch das Diabetes Prevention Program über eine bessere Gesundheit zu verfügen?',
        answers: [
          {
            text: '91',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
          {
            text: '80',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: '60',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: '33.5',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
        ],
        hint: '',
      },
      {
        question:
          'Wie viele Übernachtungen gibt es pro Jahr in den Hotels und Youth Hostels des YMCA in England und Wales?',
        answers: [
          {
            text: "28'976",
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: "53'156",
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: "110'636",
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
        ],
        hint: '',
      },
    ],
  };
  static REGIONEN_QUIZ: Quiz = {
    questions: [
      {
        question:
          'Wann findet der IKU Musik der Cevi Region Bern dieses Jahr statt?',
        answers: [
          {
            text: '12.08.2022 08:00 - 15.08.2022',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: '10.-17.10.2022',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: '12.-15.10.2022',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
        ],
        hint: 'Siehe: Webseite der Region Bern unter Cevianerin/Kursangebot/Cevi Kurse',
      },
      {
        question: 'Welchen Kurs bietet Outdoortech nicht an?',
        answers: [
          {
            text: 'Sarasani- und Seiltechnikkurs',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: 'Frauen Pioniertechnikkurs',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: 'Männer Pioniertechnikkurs',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
        ],
        hint: 'Siehe: Webseite von Outdoortech (Region Bern) unter Lager/ Kurse',
      },
      {
        question:
          'Was ist die grosse Leidenschaft des Leitungsteams des Hattricks?',
        answers: [
          {
            text: 'Basketball und Kinder',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: 'Fussball und Jesus',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
          {
            text: 'Posaunen und Singen',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
        ],
        hint: 'Siehe: Webseite des Cevi Basel unter Angebote',
      },
      {
        question:
          'Ab welchem Alter, sollten Jungscharkinder nach dem Tatkundefilter das Alarmieren können?',
        answers: [
          {
            text: '10 Jahre',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
          {
            text: '12 Jahre',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: '13 Jahre',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
        ],
        hint: 'Siehe: Webseite der Region Winterthur-Schaffhausen unter Cevi-Online/Tatkunde',
      },
      {
        question: 'Wo ist das Ladenlokal des Cevi Zürich?',
        answers: [
          {
            text: 'Sihlstrasse 33, 8001 Zürich',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
          {
            text: 'Bahnhofstrasse 24, 8001 Zürich',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: 'Stauffacherstrasse 16, 8001 Zürich',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
        ],
        hint: 'Siehe: Webseite der Cevi Zürich (Stadt) unter Angebote/Lokal/Ort/Standort',
      },
      {
        question: 'Welches Rezept gibt es im Cevi Wiki?',
        answers: [
          {
            text: 'Älplermagronen hindersi',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: 'Chüssischlacht auf dem Feuer',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
          {
            text: 'Urchige Marshmallow-Sandwichs',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
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
            text: 'Der Cevi ist wirtschaftlich relevant',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: 'Der Cevi ist eine Gemeinschaft von Kindern und Jugendlichen',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: 'Der Cevi steht auf christlichem Fundament',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
          {
            text: 'Der Cevi baut auf starke Strukturen und schlanke Beziehungen',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
        ],
        hint: 'Unter Cevi Schweiz / Portrait findet ihr das Leitbild. Weiter unten als PDF die Strategie 2030 des Cevi Schweiz. Lest das Leitbild und schaut euch die 4 Hauptslogans der Strategie 2030 an (S. 3 - 6).',
      },
      {
        question: 'Wann findet des Cevi-Tag 2022 statt?',
        answers: [
          {
            text: '10. September 2022',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: '17. September 2022',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
          {
            text: '24. September 2022',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
        ],
        hint: 'Events und Kurse: Die nationalen Events/Kurse des Cevi Schweiz, sowie deren Jahresplan findest du auf der Webseite unter Events und Ausbildung. Im PDF des Jahresplans ist der Cevitag aufgeführt.',
      },
      {
        question:
          'Welche Themenbereiche werden unter Hilfsmittel/Themen/Merkblätter aufgegriffen?',
        answers: [
          {
            text: 'LGBTQ, Interkulturelle Öffnung, Finanzen',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: 'Fröschli, Handbuch Abteilungsleitende, Prävention',
            checked: false,
            isCorrect: false,
            type: 'checkbox',
          },
          {
            text: 'Haftpflichtversicherung, Sicherheitskonzept, Vereinsgründung',
            checked: false,
            isCorrect: true,
            type: 'checkbox',
          },
        ],
        hint: 'Hilfsmittel / Merkblätter / Reglemente: Verschaffe dir einen groben Überblick zu welchen Themen es hier Unterlagen gibt.',
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
    optional: true,
  };
  public static CEVI_ALPIN_TASK = {
    title: 'Cevi Alpin',
    link: '/tasks/cevi_alpin',
    code: 'JTRM',
    quiz: TaskService.CEVI_ALPIN_QUIZ,
    locked: true,
    solved: false,
    optional: true,
  };
  public static CEVI_MILITAER_TASK = {
    title: 'Cevi Militär',
    link: '/tasks/cevi_militaer',
    code: 'NFAA',
    quiz: TaskService.CEVI_MILITAER_QUIZ,
    locked: true,
    solved: false,
    optional: false,
  };
  public static ESG_UNIFY_TASK = {
    title: 'ESG, Unify',
    link: '/tasks/esg_unify',
    code: 'GGUB',
    quiz: TaskService.ESG_UNIFY_QUIZ,
    locked: true,
    solved: false,
    optional: false,
  };
  public static YMCA_TASK = {
    title: 'YMCA',
    link: '/tasks/ymca',
    code: 'TUTM',
    quiz: TaskService.YMCA_QUIZ,
    locked: true,
    solved: false,
    optional: false,
  };
  public static YWCA_TASK = {
    title: 'YWCA',
    link: '/tasks/ywca',
    code: 'FXKN',
    quiz: TaskService.YWCA_QUIZ,
    locked: true,
    solved: false,
    optional: false,
  };
  public static AG_INT_TASK = {
    title: 'AG International',
    link: '/tasks/ag_int',
    code: 'YWUJ',
    quiz: TaskService.AG_INT_QUIZ,
    locked: true,
    solved: false,
    optional: false,
  };
  public static CEVI_VIELFALT_TASK = {
    title: 'Cevi Vielfalt',
    link: '/tasks/vielfalt',
    code: 'PNAL',
    quiz: TaskService.CEVI_VIELFALT_QUIZ,
    locked: true,
    solved: false,
    optional: false,
  };
  public static REGIONEN_TASK = {
    title: 'Regionen',
    link: '/tasks/regionen',
    code: 'MLGB',
    quiz: TaskService.REGIONEN_QUIZ,
    locked: true,
    solved: false,
    optional: false,
  };
  public static CEVI_SCHWEIZ_TASK = {
    title: 'Cevi Schweiz',
    link: '/tasks/cevi_schweiz',
    code: 'XKJW',
    quiz: TaskService.CEVI_SCHWEIZ_QUIZ,
    locked: true,
    solved: false,
    optional: false,
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
    return this.tasks.find(
      (t) => t.code.toLocaleUpperCase() === code.toLocaleUpperCase()
    );
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
