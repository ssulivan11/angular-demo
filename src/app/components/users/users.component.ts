import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users = {};
  totalPages = [];
  activePage = 1;

  constructor(private usersService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers(page = 1) {
    this.usersService.getUsers(page).subscribe(
      users => (
        (this.users = users),
        (this.totalPages = Array(users.total_pages)
          .fill(0)
          .map((x, i) => i))
      )
    );
  }

  pageSelect(page: number) {
    this.activePage = page;
    this.getUsers(page);
  }
}
