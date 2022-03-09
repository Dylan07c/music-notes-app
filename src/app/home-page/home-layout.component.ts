import { Component, OnInit } from "@angular/core";
import { mock_sm_card_list } from "../category-page/mock-sm-card-list";
import { SheetMusicCardModel } from "../category-page/sheet-music-card.model";
import { CategoryCardModel } from "../home-page/feature.model";
import { FeatureService } from "../home-page/features.service";
import { mock_feature_list } from "../home-page/mock-feature-list";
import { BlogCardModel } from "./blog-card-item.model";
import { mock_blog_list } from "./mock-blog-list";

@Component({
    selector: 'mn-home-layout',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit{
    blogCards: BlogCardModel[] = [];
    categoryCards: CategoryCardModel[] = [];
    SongCards: SheetMusicCardModel[] = [];

    constructor(private service:FeatureService) {

        for (var card of mock_blog_list) {
            this.blogCards.push(card);
        }

 

        for (var song of mock_sm_card_list) {
            this.SongCards.push(song);
        }
    }
    ngOnInit(): void{
        console.log("Fetch data");
        this.service.getProducts().subscribe(data => {
            console.log(data);
            for ( var feature of data){
                this.categoryCards.push(feature);
            }
        });
    }
}