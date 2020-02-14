import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NhlService } from '../../services/nhl.service';
import { Player, PlayerStats } from '../../type-definitions';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.scss']
})
export class PlayerInfoComponent implements OnInit {
  player: Player;
  stats: PlayerStats;

  displayedColumns: string[] = ['Season', 'Team', 'Games', 'Goals', 'Assists', 'Points', 'PlusMinus', 'PIM'];

  constructor(private route: ActivatedRoute, private nhlService: NhlService) {}

  ngOnInit(): void {
    this.getPlayer();
  }

  getPlayer() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.nhlService.getPlayer(id).subscribe(player => {
      return (this.player = player);
    });

    this.nhlService.getPlayerStats(id).subscribe(stats => {
      return (this.stats = stats);
    });
  }

  // goBack() {
  //   this.location.back();
  // }
}
