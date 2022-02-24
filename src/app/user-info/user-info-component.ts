import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { UserInfo } from "./user-info";


@Component({
    selector: 'mn-user-info',
    templateUrl: 'user-info-component.html',
    styleUrls: ['./user-info-component.css']
})
export class UserInfoComponent implements OnInit{
    myInfo: UserInfo| undefined;

    constructor (private http:HttpClient) { }

    ngOnInit(): void {
        console.log("Sending get request");
        this.showUserInfo();
        
    }

    getUserInfo() {
        return this.http.get<UserInfo>("https://music-notes-app-e5bc8-default-rtdb.firebaseio.com/myinfo.json");

    }

    showUserInfo() {
        this.getUserInfo().subscribe((data: UserInfo) => {
            console.log(data);
            this.myInfo = data;
        })
    }
}