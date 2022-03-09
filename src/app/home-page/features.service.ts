import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CategoryCardModel } from "./feature.model";

@Injectable({
    providedIn: 'root'
})
export class FeatureService{
    private baseUrl:string = 'https://music-notes-app-e5bc8-default-rtdb.firebaseio.com/';
    private featureEndPoint: string = 'catagories.json';
    
    constructor(private http:HttpClient){
        
    }

    public getProducts() {
        return this.http.get<CategoryCardModel []>(this.baseUrl + this.featureEndPoint);
    }

    public getProduct() {
        return this.http.get(this.baseUrl + this.featureEndPoint)
    }
}