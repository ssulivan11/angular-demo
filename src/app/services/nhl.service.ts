import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import Teams, { Standings, Player } from '../type-definitions';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class NhlService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  conferenceStandings = {};
  divisionStandings = {};

  constructor(private http: HttpClient, private messageService: MessageService) {}

  getTeams(): Observable<Teams> {
    return this.http.get<Teams>(this.teamsApiUrl()).pipe(
      tap(_ => this.log(`fetched teams`))
      // catchError(this.handleError<Teams>('getHeroes', []))
    );
  }

  getTeam(id: number): Observable<Teams> {
    return this.http.get<Teams>(this.teamApiUrl(id)).pipe(
      tap(_ => this.log(`fetched team - ${id}`))
      // catchError(this.handleError<Teams>('getHeroes', []))
    );
  }

  getStandings(isByConference: boolean): Observable<Standings> {
    return this.http.get<Standings>(this.standingsApiUrl(isByConference)).pipe(
      tap(_ => this.log(`fetched standings`))
      // catchError(this.handleError<Teams>('getHeroes', []))
    );
  }

  getPlayer(id: number): Observable<Player> {
    return this.http.get<Player>(this.playerApiUrl(id)).pipe(
      tap(_ => this.log(`fetched player - ${id}`))
      // catchError(this.handleError<Teams>('getHeroes', []))
    );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`NHL-Service: ${message}`);
  }

  private teamsApiUrl() {
    return 'https://statsapi.web.nhl.com/api/v1/teams';
  }

  private teamApiUrl(id: number) {
    return `https://statsapi.web.nhl.com/api/v1/teams/${id}?expand=team.roster`;
  }

  private standingsApiUrl(isByConference: boolean) {
    return `https://statsapi.web.nhl.com/api/v1/standings${isByConference ? '/byConference' : ''}`;
  }

  private playerApiUrl(id: number) {
    return `https://statsapi.web.nhl.com/api/v1/people/${id}`;
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
