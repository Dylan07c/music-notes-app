import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BrassMusicLayoutComponent } from "./category-page/brass-music-layout.component";
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
    {path: 'brass-music', component: BrassMusicLayoutComponent},
    {path: 'home,', component: HomeLayoutComponent}
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