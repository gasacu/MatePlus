import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  progress: number = 80;
  completedTests: number = 5;
  averageScore: number = 85;
  recentTests = [
    { name: 'Test Algebra', score: 90 },
    { name: 'Test Geometrie', score: 85 },
    { name: 'Test Trigonometrie', score: 78 },
  ];

  resetProgress() {
    this.progress = 0;
    this.completedTests = 0;
    this.averageScore = 0;
    this.recentTests = [];
  }

  reviewTest(test: any) {
    console.log('Revizuire test:', test);
    // Aici poți adăuga logica pentru navigarea către pagina de revizuire
  }
}
