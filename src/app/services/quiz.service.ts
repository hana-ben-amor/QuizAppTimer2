import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private http=inject(HttpClient);
  constructor() { }
  getQuestion():Observable<Question[]>
  {
    return this.http.get<Question[]>("questions.json");
  }
}
