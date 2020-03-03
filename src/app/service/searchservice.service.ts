import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from './nasa-data';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchserviceService {

  constructor(private http: HttpClient) { }

  getData() {
    let apiUrl = 'https://images-api.nasa.gov/search?q=sun&media_type=image';
    return this.http
      .get(apiUrl)
      .pipe(
        map((data: any[]) =>
          [data].map((item: any) =>
            new Data(item.items, item.href)))
      );
  }
}
