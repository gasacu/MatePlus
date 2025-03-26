import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestCreationComponent } from './test-creation/test-creation.component';
import { TestComponent } from './test/test.component';
import { ResultsComponent } from './results/results.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { ProgressComponent } from './progress/progress.component';


export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'create-test', component: TestCreationComponent },
  { path: 'test', component: TestComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'progress', component: ProgressComponent },
];

@NgModule({
  imports: [
    AppComponent,
    NavbarComponent,
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [],
  exports: [AppComponent],
})
export class AppModule {}
