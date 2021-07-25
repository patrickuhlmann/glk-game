import { Answer } from './answer';

export interface Question {
  question: string;
  answers: Answer[];
  hint: string;
}
