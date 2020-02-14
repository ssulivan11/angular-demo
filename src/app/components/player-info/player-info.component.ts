import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NhlService } from '../../services/nhl.service';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.scss']
})
export class PlayerInfoComponent implements OnInit {
  player = {};
  stats = {};

  constructor(private route: ActivatedRoute, private nhlService: NhlService) {}

  ngOnInit(): void {
    this.getPlayer();
  }

  getPlayer() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.nhlService.getPlayer(id).subscribe(player => {
      // this.nhlService.getPlayerStats(id).subscribe(stats => {
      //   return (this.stats = player.people[0].stats);
      // });
      return (this.player = player.people[0]);
    });
  }

  // goBack() {
  //   this.location.back();
  // }
}
