import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthenticationComponent } from "./auth/authentication/authentication.component";
import { GuitarMusicLayoutComponent } from "./category-page/guitar-music-layout.component";
import { PianoMusicLayoutComponent } from "./category-page/piano-music-layout.component";
import { VoiceMusicLayoutComponent } from "./category-page/voice-music-layout.component";
import { WoodwindMusicLayoutComponent } from "./category-page/woodwind-music-layout.component";
import { HomeLayoutComponent } from "./home-page/home-layout.component";

const routes:Routes = [
    {path: '', component: HomeLayoutComponent},
    {path: 'piano-music', component: PianoMusicLayoutComponent},
    {path: 'guitar-music', component: GuitarMusicLayoutComponent},
    {path: 'voice-music', component: VoiceMusicLayoutComponent},
    {path: 'woodwind-music', component: WoodwindMusicLayoutComponent},
    {path: 'home,', component: HomeLayoutComponent},
    {path : 'auth', component: AuthenticationComponent}
];

@NgModule({
    declarations: [], 
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}