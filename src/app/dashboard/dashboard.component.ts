import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  progress: number = 90;
  completedTests: number = 5;
  showTestAdded = false;
  averageScore: number = 95;
  animatedProgress = 0;
  circumference = 2 * Math.PI * 50;
  recentTests = [
    { name: 'Test Algebra', score: 90 },
    { name: 'Test Geometrie', score: 85 },
    { name: 'Test Trigonometrie', score: 78 },
  ];

  ngOnInit() {
    this.animateProgress();
  }

  animateProgress() {
    const interval = setInterval(() => {
      if (this.animatedProgress < this.progress) {
        this.animatedProgress++;
      } else {
        clearInterval(interval);
      }
    }, 15); // viteza
  }

  getProgressLevel(): 'bronze' | 'silver' | 'gold' {
    if (this.progress < 50) return 'bronze';
    if (this.progress < 75) return 'silver';
    return 'gold';
  }

  resetProgress() {
    this.progress = 0;
    this.completedTests = 0;
    this.averageScore = 0;
    this.recentTests = [];
  }

  addTest() {
    this.completedTests += 1;
    this.showTestAdded = true;
  
    setTimeout(() => {
      this.showTestAdded = false;
    }, 2000); // dispare după 2 secunde
  }

  reviewTest(test: any) {
    console.log('Revizuire test:', test);
    // Aici poți adăuga logica pentru navigarea către pagina de revizuire
  }

  getScoreColor(score: number): string {
    if (score < 50) return '#ff4d4f'; // roșu
    if (score < 80) return '#faad14'; // portocaliu
    return '#52c41a'; // verde
  }
  
  get strokeColor(): string {
    return this.getScoreColor(this.averageScore);
  }
}
