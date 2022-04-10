export interface CheckboxAnswer {
  type: 'checkbox';
  checked: boolean;
  isCorrect: boolean;
  text: string;
}

export interface TextboxAnswer {
  type: 'textbox';
  text: string;
  solution: string;
}

export type Answer = CheckboxAnswer | TextboxAnswer;
