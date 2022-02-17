import { Component } from "@angular/core";
import { mock_sm_card_list } from "./mock-sm-card-list";
import { SheetMusicCardModel } from "./sheet-music-card.model";
import { SheetMusicCard } from "./sheet-music-card";

@Component({
    selector: 'mn-guitar-music',
    templateUrl: 'guitar-music-layout.component.html',
    styleUrls: ['guitar-music-layout.component.css']
})
export class GuitarMusicLayoutComponent{
    SongCards: SheetMusicCardModel[] = [];

    constructor() {
        for (var song of mock_sm_card_list) {
            this.SongCards.push(song);
        }
    }
}