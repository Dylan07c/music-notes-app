import { Component } from '@angular/core';
import { BlogCardModel } from './home-page/blog-card-item.model';
import { FeatureCardModel } from './home-page/feature.model';
import { mock_blog_list } from './home-page/mock-blog-list';
import { mock_sm_card_list } from './category-page/mock-sm-card-list';
import { SheetMusicCardModel } from './category-page/sheet-music-card.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'music-notes';
  blogCards: BlogCardModel[] = [];
  FeatureCards: FeatureCardModel[] = [];
  SongCards: SheetMusicCardModel [] = [];

  constructor() {
    for (var card of mock_blog_list) {
      this.blogCards.push(card);
    }

   

    for(var song of mock_sm_card_list){
      this.SongCards.push(song);
    }
  }
}
