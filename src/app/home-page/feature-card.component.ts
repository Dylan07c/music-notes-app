import { Component, Input } from "@angular/core";


@Component({
    selector: 'mn-feature-card',
    templateUrl: './feature-card.component.html',
    styleUrls: ['./feature-card.component.css']
})
export class FeatureCardComponent{

    @Input() img: string;
    @Input() heading: string;
    @Input() body: string;

    constructor() {
        this.img = "";
        this.heading = "xxxx";
        this.body = "Missing body";
    }

}