import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GameSumModule } from '../game-summary/game.sum.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home.component/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GameSumModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
