import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FirstNavBarComponent } from './navigation/firstnavbar.component';
import { SecondNavBarComponent } from './navigation/secondnavbar.component';
import { FooterComponent } from './navigation/footer.component';
import { FeatureCardComponent } from './home-page/feature-card.component';
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
import { HttpClientModule } from '@angular/common/http'
import { UserInfoComponent } from './user-info/user-info-component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AddProductComponent } from './category-page/add-product.component';
import { FormsModule } from '@angular/forms';
import { AuthenticationComponent } from './auth/authentication/authentication.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstNavBarComponent,
    SecondNavBarComponent,
    FooterComponent,
    FeatureCardComponent,
    VideoBarComponent,
    BlogCardComponent,
    SongBarComponent,
    SheetMusicCard,
    PianoMusicLayoutComponent,
    HomeLayoutComponent,
    PianoMusicLayoutComponent,
    GuitarMusicLayoutComponent,
    VoiceMusicLayoutComponent,
    WoodwindMusicLayoutComponent,
    UserInfoComponent,
    AddProductComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
