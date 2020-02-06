import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import Users, { User } from '../components/users/users';
import { USERS } from '../components/users/users-mock';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) {}

  getUsers(page = 1): Observable<Users> {
    return this.http.get<Users>(this.usersUrl(page)).pipe(
      tap(_ => this.log(`fetched users from page ${page}`))
      // catchError(this.handleError<Users>('getHeroes', []))
    );
  }

  getUser(id: number): Observable<User> {
    console.warn('userService: ', id);
    return this.http.get<User>(this.userUrl(id)).pipe(
      tap(_ => this.log(`fetched user from id ${id}`))
      // catchError(this.handleError<Users>('getHeroes', []))
    );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`UserService: ${message}`);
  }

  private usersUrl(page: number) {
    return `https://reqres.in/api/users?per_page=4&page=${page}`;
  }

  private userUrl(id: number) {
    return `https://reqres.in/api/users/${id}`;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
