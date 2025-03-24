import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css',
})
export class LeaderboardComponent {
  leaderboard = [
    { name: 'Ion Popescu', score: 150 },
    { name: 'Maria Ionescu', score: 140 },
    { name: 'George Vasilescu', score: 130 },
  ];
}
