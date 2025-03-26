import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  user = {
    name: 'Ion Popescu',
    email: 'ion.popescu@example.com',
    progress: 75,
    notifications: true,
    testHistory: [
      { name: 'Test Algebra', score: 88 },
      { name: 'Test Geometrie', score: 92 },
      { name: 'Test Trigonometrie', score: 85 },
    ],
  };

  changePassword() {
    console.log('Schimbă parola - Implementare viitoare');
  }

  toggleNotifications() {
    this.user.notifications = !this.user.notifications;
  }
}
