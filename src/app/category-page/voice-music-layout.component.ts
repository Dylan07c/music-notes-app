import { Component } from "@angular/core";
import { mock_sm_card_list } from "./mock-sm-card-list";
import { SheetMusicCardModel } from "./sheet-music-card.model";
import { SheetMusicCard } from "./sheet-music-card";

@Component({
    selector: 'mn-voice-music',
    templateUrl: 'voice-music-layout.component.html',
    styleUrls: ['voice-music-layout.component.css']
})
export class VoiceMusicLayoutComponent{
    SongCards: SheetMusicCardModel[] = [];

    constructor() {
        for (var song of mock_sm_card_list) {
            this.SongCards.push(song);
        }
    }
}