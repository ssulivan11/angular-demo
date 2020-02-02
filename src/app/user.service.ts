import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import Users, { User } from './users/users';
import { USERS } from './users/users-mock';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private messageService: MessageService) { }

  getUsers(): Observable<Users> {
    this.messageService.add('UserService: fetched users');
    return of(USERS);
  }

  getUser(id: number): Observable<User> {
    this.messageService.add(`UserService: fetched user id=${id}`);
    return of(USERS.data.find(user => user.id === id));
  }
}
