export class SheetMusicCardModel{
    img: string;
    title: string;
    artist: string;
    inst: string

    constructor(img:string, title:string, artist:string, inst:string) {
    this.img = img;
    this.title = title;
    this.artist = artist;
    this.inst = inst;
    }
}