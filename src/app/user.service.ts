import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import User from './users/users';
import { USERS } from './users/users-mock';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private messageService: MessageService) { }

  getUsers(): Observable<User> {
    this.messageService.add('UserService: fetched users');
    return of(USERS);
  }
}
