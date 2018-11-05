import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchHistoryComponent} from './search-history/search-history.component';
import { LoginComponent } from './login/login.component';
import {WikiSearchComponent} from './wiki-search/wiki-search.component'; 
import {HomeComponent} from './home/home.component';
import {GiphyComponent} from './giphy-search/giphy-search.component';
import {AuthGuard} from './login/auth.guard';


const routes: Routes = [
  {path : "", redirectTo:'home', pathMatch: 'full'},
  {path : "home", component: HomeComponent},
  {path : "searchHistory", component:SearchHistoryComponent, canActivate:[AuthGuard]},
  {path : "login", component : LoginComponent},
  {path : "wikiSearch", component:WikiSearchComponent, canActivate:[AuthGuard]},
  {path : "giphySearch", component:GiphyComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
