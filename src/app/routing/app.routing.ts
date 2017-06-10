import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import { AboutComponent } from '../music/about/about.component';
import { ArtistComponent } from '../music/artist/artist.component';
import { SearchComponent } from '../music/search/search.component';
import { HomeComponent } from '../music/home/home.component';
import { TracksComponent } from '../music/tracks/tracks.component';

const AppRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path: 'artist/:mbid',
    component: ArtistComponent
  },
  {
    path: 'tracks/:mbid',
    component: TracksComponent
  },
  {
    path: 'search',
    component: SearchComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
