import { Component } from '@angular/core';
import { BlogCardModel } from './home-page/blog-card-item.model';
import { mock_blog_list } from './home-page/mock-blog-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'music-notes';
  blogCards: BlogCardModel [] = [];

  constructor() {
    for (var card of mock_blog_list) {
  this.blogCards.push(card);
    }
  }
}
