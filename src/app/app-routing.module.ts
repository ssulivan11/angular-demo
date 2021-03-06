import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsDisplayComponent } from './components/teams-display/teams-display.component';
import { TeamDetailComponent } from './components/team-details/team-detail.component';
import { StandingsComponent } from './components/standings/standings.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';

const routes: Routes = [
  { path: 'teams', component: TeamsDisplayComponent },
  { path: 'standings', component: StandingsComponent },
  { path: 'team/:id', component: TeamDetailComponent },
  { path: 'player/:id', component: PlayerInfoComponent },
  { path: '', redirectTo: '/standings', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
