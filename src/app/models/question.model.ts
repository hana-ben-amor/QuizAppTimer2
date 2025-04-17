export interface Question {
    id: number;
    question: string;
    options: string[];
    answer?: string; // user's selected answer
  }
  