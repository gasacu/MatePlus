import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent {
  questions = [
    {
      text: 'Care este rezultatul 2 + 2?',
      options: ['3', '4', '5'],
      answer: '4',
    },
    {
      text: 'Care este pătratul lui 5?',
      options: ['20', '25', '30'],
      answer: '25',
    },
  ];
  currentIndex = 0;
  currentQuestion = this.questions[this.currentIndex];
  feedback = '';
  timer = 30;

  selectAnswer(option: string) {
    this.feedback =
      option === this.currentQuestion.answer ? 'Corect!' : 'Greșit!';
  }

  nextQuestion() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      this.currentQuestion = this.questions[this.currentIndex];
      this.feedback = '';
    } else {
      alert('Test finalizat!');
    }
  }
}
