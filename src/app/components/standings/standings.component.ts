import { Component, OnInit } from '@angular/core';
import { NhlService } from '../../services/nhl.service';
import { Standings } from '../../type-definitions';
import getTeamAbbreviation from '../../config/getTeamAbbreviation';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss']
})
export class StandingsComponent implements OnInit {
  displayedColumns: string[] = ['Team', 'GP', 'W', 'L', 'OTL', 'Pts', 'GF', 'GA', 'Diff', 'Strk'];
  selectedView: string;

  conferenceStandings: Standings;
  divisionStandings: Standings;

  constructor(private nhlService: NhlService) {}

  ngOnInit() {
    this.getStandings('conference');
    this.selectedView = 'conference';
  }

  getStandings(selectedView: string) {
    const isByConference = selectedView === 'conference';
    if (isByConference) {
      if (!this.conferenceStandings) {
        this.nhlService.getStandings(isByConference).subscribe(standings => {
          this.conferenceStandings = standings;
        });
      } else {
        return this.conferenceStandings;
      }
    } else {
      if (!this.divisionStandings) {
        this.nhlService.getStandings(isByConference).subscribe(standings => {
          this.divisionStandings = standings;
        });
      } else {
        return this.divisionStandings;
      }
    }
  }

  onViewChange(val: string) {
    this.getStandings(val);
    this.selectedView = val;
  }

  getTeamAbbreviation(team: string) {
    return getTeamAbbreviation(team);
  }
}
