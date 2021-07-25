import { Quiz } from './quiz';

export interface TaskState {
  identifier: string;
  locked: boolean;
  solved: boolean;
}
