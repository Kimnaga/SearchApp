import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SearchHistoryComponent} from '../search-history/search-history.component';

@Injectable({
  providedIn: 'root'
})
export class WikiSearchService {
  wikiUrl : string;
  resultText : string;
  resultArr : string [] = [];
  resultString : string;
  constructor(private http: HttpClient, private searchHistory:SearchHistoryComponent) { 
    this.wikiUrl = "";
  }

  getArticle(searchText: string){
    this.wikiUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchText}`;
    this.searchHistory.setHistory(searchText,"Wikipedia");
    return this.http.get(this.wikiUrl);
  }

}
