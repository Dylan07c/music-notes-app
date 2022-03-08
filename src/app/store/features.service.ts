import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class FeatureService{
    private baseUrl:string = "https://music-notes-app-e5bc8-default-rtdb.firebaseio.com/";
    private productsEndPoint: string = 'catagories.json';
    consturctor(private http:HttpClient){

    }

    public getProducts() {
        return this.http.get<FeatureItemModel []>(this.baseUrl + this.productsEndPoint);
    }

    public getProduct() {
        return this.http.get
    }
}