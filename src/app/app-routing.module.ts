import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsDisplayComponent } from './components/teams-display/teams-display.component';
import { TeamDetailComponent } from './components/team-details/team-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'teams', component: TeamsDisplayComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'team/:id', component: TeamDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
