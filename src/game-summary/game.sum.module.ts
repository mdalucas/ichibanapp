import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GameSumComponent } from './game.sum.component';

@NgModule({
  declarations: [
    GameSumComponent,
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    GameSumComponent
  ],
  providers: [],
  bootstrap: [GameSumComponent]
})
export class GameSumModule { }
