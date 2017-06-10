import { Component, OnInit } from '@angular/core';
import {MusicService} from "../../services/music.service";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers: [MusicService]
})
export class SearchComponent implements OnInit {

  constructor(private service: MusicService) { }

  searchRes: any[];
  searchArtist: string;
  artistChart: any[];

  ngOnInit() {
    // Get Charts
    this.service.GetPopularArtist().subscribe(result => {
      this.artistChart = result.artists.artist;
    });
  }

  OnSearchArtist() {
    this.service.SearchMusic(this.searchArtist).subscribe(resArtist => {
      this.searchRes = resArtist;
      console.log(resArtist);
    });
  }

}
