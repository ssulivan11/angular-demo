import { Component, OnInit } from '@angular/core';
import { USERS } from './users-mock';
import { UserService } from '../user.service';
import User from './users'


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  users = USERS;
  selectedUser: User;

  constructor(private usersService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers()
      .subscribe(users => this.users = users);
  }


  onSelect(user: User): void {
    this.selectedUser = user;
  }
}
