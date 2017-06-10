import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MusicService {

  private searchUrl: string;
  private artistUrl: string;
  private albumUrl: string;
  private albuminfoUlr: string;
  key = '3eb5746733b334285eb72372126b9a08';

  constructor(private http: Http) { }

  // Get Artist
  SearchMusic(str: string) {
    this.searchUrl = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo" +
      "&artist=" + str +
      "&api_key=" + this.key +
      "&format=json";
    return this.http.get(this.searchUrl).map(res => res.json());
  }
  // Get Popular Artists CHART
  GetPopularArtist() {
    this.searchUrl = "http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists" +
      "&api_key=" + this.key +
      "&format=json";
    return this.http.get(this.searchUrl).map(res => res.json());
  }

  // Get TOP Album of the Artist
  GetTopAlbumArtist(mbid: string) {
    this.searchUrl = "http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums" +
      "&mbid=" + mbid +
      "&api_key=" + this.key +
      "&format=json";
    return this.http.get(this.searchUrl).map(res => res.json());
  }

  // Get Top Tracks of the Artists
  GetTopTracksArtist(mbid: string) {
    this.searchUrl = "http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks" +
      "&mbid=" + mbid +
      "&api_key=" + this.key +
      "&format=json";
    return this.http.get(this.searchUrl).map(res => res.json());
  }
}
