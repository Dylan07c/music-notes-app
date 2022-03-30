
import { Injectable } from "@angular/core";
import { FeatureCardModel } from "./feature.model";
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
    providedIn: 'root'
})
export class FeatureService{
   
    constructor(private db: AngularFireDatabase){
        
    }

    public getProducts() {
        return this.db.list<FeatureCardModel>("catagories").valueChanges();
    }

    public getProduct(index:number) {
        return this.db.list("features", ref => ref.orderByChild("body").startAt(2)).valueChanges();
    }

    public addFeature(feature:FeatureCardModel){
        this.db.list("catagories").push(feature);
    }
}