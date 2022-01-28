import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstNavBarComponent } from './navigation/firstnavbar.component';
import { SecondNavBarComponent } from './navigation/secondnavbar.component';
import { FooterComponent } from './navigation/footer.component';
import { CategoryCardComponent } from './store/feature.card.component';
import { VideoBarComponent } from './home-page/video-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstNavBarComponent,
    SecondNavBarComponent,
    FooterComponent,
    CategoryCardComponent,
    VideoBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
