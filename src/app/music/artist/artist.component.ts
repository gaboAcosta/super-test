import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MusicService} from "../../services/music.service";


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  providers: [MusicService]
})
export class ArtistComponent implements OnInit {

  constructor(private service: MusicService, private route: ActivatedRoute) { }

  albumes: any[];

  ngOnInit() {
    this.route.params.map(params => params['mbid']).subscribe(
      mbid => {
        // Top Album
        this.service.GetTopAlbumArtist(mbid).subscribe(topalbum => {
          this.albumes = topalbum.topalbums.album;
          console.log(topalbum.topalbums.image);
        });
      }
    );
  }

}
