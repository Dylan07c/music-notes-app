import { Component, Input } from "@angular/core";


@Component({
    selector: 'mn-sheet-music-card',
    templateUrl: 'sheet-music-card.html',
    styleUrls: ['./sheet-music-card.css']
})
export class SheetMusicCard{
    @Input() img: string;
    @Input() title: string;
    @Input() artist: string;
    @Input() inst: string;


    constructor() {
        this.img = "";
        this.title= "xxxx";
        this.artist = "No artist";
        this. inst= "xxxx"
    }

}