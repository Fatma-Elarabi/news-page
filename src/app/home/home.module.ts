import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { HighlightsBannerComponent } from './components/highlights-banner/highlights-banner.component';
import { MediaComponent } from './components/media/media.component';
import { HomeRoutingModule } from './home-routing.module';
import { ThingsWeDoComponent } from './components/things-we-do/things-we-do.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';



@NgModule({
  declarations: [
    HomePageComponent,
    HighlightsBannerComponent,
    MediaComponent,
    ThingsWeDoComponent,
    NewsDetailsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
