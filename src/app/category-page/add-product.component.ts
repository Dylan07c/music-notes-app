import { Component, OnInit } from '@angular/core';
import { FeatureCardModel } from '../home-page/feature.model';
import { FeatureService } from '../home-page/features.service';

@Component({
  selector: 'mn-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private fs:FeatureService) { }

  ngOnInit(): void {
  }

  addFeature(feature:FeatureCardModel) {
    console.log("You pressed create account");
    this.fs.addFeature(feature);
  }
}
