import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {SearchHistoryComponent} from '../search-history/search-history.component';
@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  giphyURL : string ='';
  constructor(private http : HttpClient, private searchHistory : SearchHistoryComponent) {
  }
   
   getGiphy(searchText : string) {
     this.giphyURL = `https://api.giphy.com/v1/gifs/search?api_key=${environment.apiKey}&q=${searchText}&limit=25&offset=0&rating=G&lang=en`;
     this.searchHistory.setHistory(searchText,"Giphy");
     return this.http.get (this.giphyURL);
   }

}
