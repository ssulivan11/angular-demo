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

  constructor(private route: ActivatedRoute, private nhlService: NhlService) {}

  ngOnInit(): void {
    this.getPlayer();
  }

  getPlayer() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.nhlService.getPlayer(id).subscribe(player => {
      return (this.player = player);
    });
  }

  // goBack() {
  //   this.location.back();
  // }
}
