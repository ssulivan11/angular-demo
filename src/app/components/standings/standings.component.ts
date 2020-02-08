import { Component, OnInit } from '@angular/core';
import { NhlService } from '../../services/nhl.service';
import { Standings } from '../../type-definitions';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss']
})
export class StandingsComponent implements OnInit {
  displayedColumns: string[] = ['Team', 'GP', 'W', 'L', 'OTL', 'Pts', 'GF', 'GA', 'Diff', 'Strk'];
  selectedView: string;

  conferenceStandings = {};
  divisionStandings = {};

  constructor(private nhlService: NhlService) {}

  ngOnInit() {
    this.getStandings('conference');
    this.selectedView = 'conference';
  }

  getStandings(selectedView: string) {
    const isByConference = selectedView === 'conference';
    if (isByConference) {
      if (!Object.keys(this.conferenceStandings).length) {
        this.nhlService.getStandings(isByConference).subscribe(standings => {
          this.conferenceStandings = standings;
        });
      } else {
        return this.conferenceStandings;
      }
    } else {
      if (!Object.keys(this.divisionStandings).length) {
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
    if (team === 'New Jersey Devils') {
      return 'njd';
    }
    if (team === 'New York Islanders') {
      return 'nyi';
    }
    if (team === 'New York Rangers') {
      return 'nyr';
    }
    if (team === 'Philadelphia Flyers') {
      return 'phi';
    }
    if (team === 'Pittsburgh Penguins') {
      return 'pit';
    }
    if (team === 'Boston Bruins') {
      return 'bos';
    }
    if (team === 'Buffalo Sabres') {
      return 'buf';
    }
    if (team === 'Montréal Canadiens') {
      return 'mtl';
    }
    if (team === 'Ottawa Senators') {
      return 'ott';
    }
    if (team === 'Toronto Maple Leafs') {
      return 'tor';
    }
    if (team === 'Carolina Hurricanes') {
      return 'car';
    }
    if (team === 'Florida Panthers') {
      return 'fla';
    }
    if (team === 'Washington Capitals') {
      return 'wsh';
    }
    if (team === 'Chicago Blackhawks') {
      return 'chi';
    }
    if (team === 'Detroit Red Wings') {
      return 'det';
    }
    if (team === 'Nashville Predators') {
      return 'nsh';
    }
    if (team === 'St. Louis Blues') {
      return 'stl';
    }
    if (team === 'Calgary Flames') {
      return 'cgy';
    }
    if (team === 'Colorado Avalanche') {
      return 'col';
    }
    if (team === 'Edmonton Oilers') {
      return 'edm';
    }
    if (team === 'Vancouver Canucks') {
      return 'van';
    }
    if (team === 'Anaheim Ducks') {
      return 'ana';
    }
    if (team === 'Dallas Stars') {
      return 'dal';
    }
    if (team === 'Los Angeles Kings') {
      return 'lak';
    }
    if (team === 'San Jose Sharks') {
      return 'sjs';
    }
    if (team === 'Columbus Blue Jackets') {
      return 'cbj';
    }
    if (team === 'Minnesota Wild') {
      return 'min';
    }
    if (team === 'Winnipeg Jets') {
      return 'wpg';
    }
    if (team === 'Arizona Coyotes') {
      return 'ari';
    }
    if (team === 'Vegas Golden Knights') {
      return 'vgk';
    }
    return 'tb';
  }
}
