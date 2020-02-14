import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsDisplayComponent } from './components/teams-display/teams-display.component';
import { TeamDetailComponent } from './components/team-details/team-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { StandingsComponent } from './components/standings/standings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { GroupByPipe } from './groupby.pipe';
import { MaterialModule } from './material-module';
import { PlayerInfoComponent } from './components/player-info/player-info.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsDisplayComponent,
    TeamDetailComponent,
    MessagesComponent,
    StandingsComponent,
    PlayerInfoComponent
    // GroupByPipe
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
