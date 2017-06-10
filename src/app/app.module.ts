import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './music/about/about.component';
import { ArtistComponent } from './music/artist/artist.component';
import { HomeComponent } from './music/home/home.component';
import { SearchComponent } from './music/search/search.component';
import { TracksComponent } from './music/tracks/tracks.component';

//routing
import { routing } from './routing/app.routing';

// service
import { MusicService } from './services/music.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ArtistComponent,
    HomeComponent,
    SearchComponent,
    TracksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [MusicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
