import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {GiphyService} from './giphy-search.service';
@Component({
  selector: 'app-giphy-search',
  templateUrl: './giphy-search.component.html',
  styleUrls: ['./giphy-search.component.css']
})
export class GiphyComponent implements OnInit {
  dataArr : Observable<any[]>;
  searchText : string;
  constructor(private service : GiphyService) { }

  getImage(){
    if (this.searchText != null) {
      this.service.getGiphy(this.searchText).subscribe((result)=>{
        console.log(result);
        this.dataArr=result['data'];
        console.log(this.dataArr[0].images.fixed_height_downsampled.url+" ");
      });
    }
  }

  ngOnInit() {
  }
}
