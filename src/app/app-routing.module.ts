import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component/home.component';
import { GameSumComponent } from 'src/game-summary/game.sum.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'a', component: GameSumComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
