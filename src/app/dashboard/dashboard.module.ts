import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {NavbarComponent} from "../shared/navbar/navbar.component";
import {ProfileComponent} from './profile/profile.component';
import {RankingComponent} from './ranking/ranking.component';
import {WallComponent} from './wall/wall.component';
import {ToolsComponent} from './tools/tools.component';
import {PostComponent} from './post/post.component';
import {YouTubePlayerModule} from "@angular/youtube-player";
import { AdvertisingComponent } from './advertising/advertising.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    ProfileComponent,
    RankingComponent,
    WallComponent,
    ToolsComponent,
    PostComponent,
    AdvertisingComponent,

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    YouTubePlayerModule,
  ]
})
export class DashboardModule {
}
