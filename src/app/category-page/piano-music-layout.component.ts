import { Component } from "@angular/core";
import { mock_sm_card_list } from "./mock-sm-card-list";
import { SheetMusicCardModel } from "./sheet-music-card.model";
import { SheetMusicCard } from "./sheet-music-card";

@Component({
    selector: 'mn-piano-music',
    templateUrl: 'piano-music-layout.component.html',
    styleUrls: ['piano-music-layout.component.css']
})
export class PianoMusicLayoutComponent{
    SongCards: SheetMusicCardModel[] = [];

    constructor() {
        for (var song of mock_sm_card_list) {
            this.SongCards.push(song);
        }
    }
}