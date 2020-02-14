import { Component, OnInit } from '@angular/core';
import { NhlService } from '../../services/nhl.service';
import getTeamAbbreviation from '../../config/getTeamAbbreviation';
import Teams from '../../type-definitions';

@Component({
  selector: 'app-teams-display',
  templateUrl: './teams-display.component.html',
  styleUrls: ['./teams-display.component.scss']
})
export class TeamsDisplayComponent implements OnInit {
  teams: Teams;

  constructor(private nhlService: NhlService) {}

  ngOnInit() {
    this.getTeams();
  }

  getTeams() {
    this.nhlService.getTeams().subscribe(teams => (this.teams = teams));
  }

  getTeamAbbreviation(team: string) {
    return getTeamAbbreviation(team);
  }
}
