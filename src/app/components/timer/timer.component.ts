import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timer',
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {
  @Input() timeLeft!: number;
  @Input() currentIndex!: number;
}
