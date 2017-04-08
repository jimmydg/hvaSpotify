import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../spotify.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistName: string;
  resultList: Object[];
  favourites = [];

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  searchArtist(artistName) {
    this.spotifyService.search(artistName).subscribe(res => {
      this.resultList = res.artists.items;
    });
  }

  addFavourite(favouriteArtist) {
    this.favourites.push(favouriteArtist);
  }

  removeFavourite(index) {
    this.favourites.splice(index, 1);
  }
}
