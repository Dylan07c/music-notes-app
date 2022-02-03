import { Component } from '@angular/core';
import { BlogCardModel } from './home-page/blog-card-item.model';
import { CategoryCardModel } from './store/feature.model';
import { mock_blog_list } from './home-page/mock-blog-list';
import { mock_feature_list } from './store/mock-feature-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'music-notes';
  blogCards: BlogCardModel [] = [];
  categoryCards: CategoryCardModel [] = [];

  constructor() {
    for (var card of mock_blog_list) {
  this.blogCards.push(card);
    }

    for(var category of mock_feature_list) {
      this.categoryCards.push(category);
    }
  }
}
