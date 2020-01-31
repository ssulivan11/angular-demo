import { Component, OnInit } from '@angular/core';
import User from './users'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  user: User = {
    id: 1,
    first_name: 'Warren',
    last_name: 'Moon'
  };

  constructor() { }

  ngOnInit() {
  }

}
