import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';

import {environment} from '../environments/environment';
import { WikiSearchComponent } from './wiki-search/wiki-search.component';
import { HomeComponent } from './home/home.component';
import { GiphyComponent} from './giphy-search/giphy-search.component';
import {GiphyService} from './giphy-search/giphy-search.service';
import {WikiSearchService} from './wiki-search/wiki-search.service';
import {AuthGuard}from './login/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    SearchHistoryComponent,
    LoginComponent,
    WikiSearchComponent,
    HomeComponent,
    GiphyComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoginService, GiphyService, WikiSearchService, AuthGuard, SearchHistoryComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
