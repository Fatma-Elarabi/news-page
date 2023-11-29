import { Component, OnInit } from '@angular/core';
import { HomePageService } from '../../services/home-page.service';
import { Islide, Islides } from './../../models/banner.model';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  private readonly destroyed$ = new Subject<void>();

  slides!: Islide[];
  svgColor!: string;

  constructor(private homeServivce: HomePageService) {
    this.getBanner();
  }

  ngOnInit(): void {}

  getBanner() {
    this.homeServivce
      .getBanner()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((slide: Islides) => {
        this.slides = slide.slides;
        this.appendImgUrl();
        this.svgColor = `#${this.slides[0].colorCode}`;
      });
  }

  appendImgUrl() {
    this.slides[0].imgUrl = '../../../../assets/img/traveller-0.png';
    this.slides[1].imgUrl = '../../../../assets/img/traveller-1.png';
    this.slides[2].imgUrl = '../../../../assets/img/traveller-2.png';
  }

  fillSvgColor(color: string) {
    this.svgColor = `#${color}`;
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
