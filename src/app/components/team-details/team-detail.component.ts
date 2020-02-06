import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TeamsService } from '../../services/team.service';
import { Team } from '../teams-display/teams';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit {
  team: Team;

  constructor(private route: ActivatedRoute, private teamsService: TeamsService, private location: Location) {}

  ngOnInit(): void {
    this.getTeam();
  }

  getTeam() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.teamsService.getTeam(id).subscribe(team => {
      return (this.team = team.teams[0]);
    });
  }

  goBack() {
    this.location.back();
  }
}
