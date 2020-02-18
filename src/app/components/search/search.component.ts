import { Component, OnInit } from '@angular/core';
import { SearchserviceService } from '../../service/searchservice.service';
import { Data } from '../../service/nasa-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private searchservice: SearchserviceService) { }
  datas$: Data[];

  ngOnInit() {
    //console.log(term)
    return this.searchservice.getData()
      .subscribe(data => this.datas$ = data);
  }

  showResults(){
    console.log(this.datas$);
  }

}
