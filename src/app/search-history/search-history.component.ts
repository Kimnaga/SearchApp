import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase/app';
import {LoginService} from '../login/login.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent implements OnInit {
  searchHistoryRef : any;
  user : firebase.User;
  userId : string;
  searchHistory : Observable<any[]>;

  constructor(private db : AngularFireDatabase, private service : LoginService) {
    this.user = service.getCurrentUser();
    this.userId = this.user.uid;
    this.searchHistoryRef = this.db.list(`currentSession/${this.userId}/searches`);
   }

  ngOnInit() {
    this.getHistory();
  }

  setHistory (text : string, type: string){
    var timeStamp = new Date().toDateString();
    this.searchHistoryRef.push({
      searchText : text,
      searchType : type,
      time : timeStamp
    });
  }

  getHistory(){
    this.searchHistory = this.searchHistoryRef.valueChanges();
  }

}
