import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MusicService} from "../../services/music.service";

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  providers: [MusicService]
})
export class TracksComponent implements OnInit {

  songs: any[];

  constructor(private route: ActivatedRoute, private service: MusicService) { }

  ngOnInit() {
    this.route.params.map(params => params['mbid']).subscribe(
      mbid => {
        // Top Tracks
        this.service.GetTopTracksArtist(mbid).subscribe(top => {
          this.songs = top.toptracks.track;
          console.log(top.toptracks.track.name);
        });

      }
    );
  }
}
