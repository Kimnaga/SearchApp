import { Component, OnInit } from '@angular/core';
import {WikiSearchService} from './wiki-search.service';
import {Observable}from 'rxjs';

@Component({
  selector: 'app-wiki-search',
  templateUrl: './wiki-search.component.html',
  styleUrls: ['./wiki-search.component.css']
})
export class WikiSearchComponent implements OnInit {
  resArr : Observable<any[]>;
  searchText : string= '';
  q:any;
  constructor(private wikiService : WikiSearchService) { 
  }


  getWiki(){
    this.wikiService.getArticle(this.searchText).subscribe((result)=>{
      this.q = result['query'];
      this.resArr = this.q['search']; 
    });
  }

  ngOnInit() {
  }

}
