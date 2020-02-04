import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  users = {};

  constructor(private usersService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers().subscribe(users => (this.users = users));
  }
}
