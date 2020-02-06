import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../services/team.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  teams = {};

  constructor(private teamsService: TeamsService) {}

  ngOnInit() {
    this.getTeams();
  }

  getTeams() {
    this.teamsService.getTeams().subscribe(teams => (this.teams = teams));
  }
}
