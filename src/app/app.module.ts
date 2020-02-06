import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsDisplayComponent } from './components/teams-display/teams-display.component';
import { TeamDetailComponent } from './components/team-details/team-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { GroupByPipe } from './groupby.pipe';
import { MaterialModule } from './material-module';

@NgModule({
  declarations: [
    AppComponent,
    TeamsDisplayComponent,
    TeamDetailComponent,
    MessagesComponent,
    DashboardComponent
    // GroupByPipe
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
