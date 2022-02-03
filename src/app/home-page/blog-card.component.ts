import { Component, Input } from "@angular/core";


@Component({
    selector: 'mn-blog-card',
    templateUrl: 'blog-card.component.html',
    styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent{

    @Input() img: string;
    @Input() heading: string;
    @Input() body: string;

    constructor() {
        this.img = "";
        this.heading = "xxxx";
        this.body = "Missing body";
    }

}