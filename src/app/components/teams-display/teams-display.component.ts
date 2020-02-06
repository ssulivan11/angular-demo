import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../services/team.service';

@Component({
  selector: 'app-teams-display',
  templateUrl: './teams-display.component.html',
  styleUrls: ['./teams-display.component.scss']
})
export class TeamsDisplayComponent implements OnInit {
  teams = {};

  constructor(private teamsService: TeamsService) {}

  ngOnInit() {
    this.getTeams();
  }

  getTeams() {
    this.teamsService.getTeams().subscribe(teams => (this.teams = teams));
  }
}
