import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import Teams, { Team } from '../components/teams-display/teams';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) {}

  getTeams(page = 1): Observable<Teams> {
    return this.http.get<Teams>(this.teamsUrl()).pipe(
      tap(_ => this.log(`fetched teams`))
      // catchError(this.handleError<Teams>('getHeroes', []))
    );
  }

  getTeam(id: number): Observable<Teams> {
    return this.http.get<Teams>(this.teamUrl(id)).pipe(
      tap(_ => this.log(`fetched team ${id}`))
      // catchError(this.handleError<Teams>('getHeroes', []))
    );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`TeamsService: ${message}`);
  }

  private teamsUrl() {
    return 'https://statsapi.web.nhl.com/api/v1/teams';
  }

  private teamUrl(id: number) {
    return `https://statsapi.web.nhl.com/api/v1/teams/${id}`;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for team consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
