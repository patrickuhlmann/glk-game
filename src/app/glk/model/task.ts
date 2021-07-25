import { Quiz } from './quiz';

export interface Task {
  title: string;
  link: string;
  code: string;
  quiz: Quiz;
  locked: boolean;
  solved: boolean;
}
