import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/pages/home/home.component'
import {AboutComponent} from './components/pages/about/about.component'
import {PlayerDetailsComponent} from './components/pages/player-details/player-details.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'about', component: AboutComponent},
  {path: 'player-details/:id', component: PlayerDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
