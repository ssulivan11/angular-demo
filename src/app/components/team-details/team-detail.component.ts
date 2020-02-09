import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { NhlService } from '../../services/nhl.service';
import { Team } from '../../type-definitions';
import getTeamAbbreviation from '../../config/getTeamAbbreviation';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit {
  team: Team;
  displayedColumns: string[] = ['Name', 'Number', 'Position'];

  constructor(private route: ActivatedRoute, private nhlService: NhlService, private location: Location) {}

  ngOnInit(): void {
    this.getTeam();
  }

  getTeam() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.nhlService.getTeam(id).subscribe(team => {
      return (this.team = team.teams[0]);
    });
  }

  goBack() {
    this.location.back();
  }

  getTeamAbbreviation(team: string) {
    return getTeamAbbreviation(team);
  }
}
