import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Http, Response} from "@angular/http";

@Injectable()
export class SpotifyService {

  constructor(private http: Http) {}

  search(searchString: string) {
    let apiUrl = 'https://api.spotify.com/v1/search?type=artist&q=' + encodeURIComponent(searchString);

    return this.http.get(apiUrl)
      .map((res: Response) => {
        return res.json();
      })
      .catch((error:any) => Observable.throw(error.json() || 'Server error'));
  }

}
