import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FirstNavBarComponent } from './navigation/firstnavbar.component';
import { SecondNavBarComponent } from './navigation/secondnavbar.component';
import { FooterComponent } from './navigation/footer.component';
import { CategoryCardComponent } from './store/feature-card.component';
import { VideoBarComponent } from './home-page/video-bar.component';
import { BlogCardComponent } from './home-page/blog-card.component';
import { SongBarComponent } from './home-page/song-bar.component';
import { SheetMusicCard } from './category-page/sheet-music-card';
import { PianoMusicLayoutComponent } from './category-page/piano-music-layout.component';
import { HomeLayoutComponent } from './home-page/home-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { GuitarMusicLayoutComponent } from './category-page/guitar-music-layout.component';
import { VoiceMusicLayoutComponent } from './category-page/voice-music-layout.component';
import { WoodwindMusicLayoutComponent } from './category-page/woodwind-music-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstNavBarComponent,
    SecondNavBarComponent,
    FooterComponent,
    CategoryCardComponent,
    VideoBarComponent,
    BlogCardComponent,
    SongBarComponent,
    SheetMusicCard,
    PianoMusicLayoutComponent,
    HomeLayoutComponent,
    PianoMusicLayoutComponent,
    GuitarMusicLayoutComponent,
    VoiceMusicLayoutComponent,
    WoodwindMusicLayoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
