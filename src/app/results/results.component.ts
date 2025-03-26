import { Component } from '@angular/core';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss',
})
export class ResultsComponent {
  score: number = 85; // Exemplu de scor
  feedback: string = 'Foarte bine! Continuă să te îmbunătățești!';
  testDate: string = '2025-03-24';

  // Adaugă o funcție pentru a obține un mesaj în funcție de scor
  getFeedback(): string {
    if (this.score >= 90) {
      return 'Excelent!';
    } else if (this.score >= 75) {
      return 'Bine făcut!';
    } else {
      return 'Ai posibilitatea de a îmbunătăți performanța.';
    }
  }
}
