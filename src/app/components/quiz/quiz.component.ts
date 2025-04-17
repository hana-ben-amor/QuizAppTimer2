import { Component, inject, OnInit } from '@angular/core';
import { TimerComponent } from '../timer/timer.component';
import { Question } from '../../models/question.model';
import { QuizService } from '../../services/quiz.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatRadioButton } from '@angular/material/radio';
@Component({
  selector: 'app-quiz',
  imports: [TimerComponent,NgIf,FormsModule,NgFor,MatCardModule,MatRadioButton],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit {
  questions:Question[]=[];
  currentIndex=0;
  selectedAnswer: string = '';
  timer = 10;
  intervalId: any;

  quizService=inject(QuizService);
  ngOnInit(): void {
    this.quizService.getQuestion().subscribe(
      data=>{
        this.questions=data;
        this.startTimer();
      },
      error =>{
        console.log(error);
      }
    )
  }


  startTimer()
  {
    this.timer=10;
    this.intervalId=setInterval(()=>{
      this.timer--;
      if(this.timer == 0){
        this.next();
      }
    },1000)
  }

  stopTimer(){
    clearInterval(this.intervalId);
  }

  next()
  {
    this.saveAnswer();
    this.stopTimer();
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      this.startTimer();
    }
  }

  back() {
    this.stopTimer();
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.startTimer();
    }
  }

  saveAnswer() {
    this.questions[this.currentIndex].answer = this.selectedAnswer;
  }
}
