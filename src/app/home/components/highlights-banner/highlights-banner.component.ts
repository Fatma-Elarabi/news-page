import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Islide } from 'src/app/home/models/banner.model';
@Component({
  selector: 'app-highlights-banner',
  templateUrl: './highlights-banner.component.html',
  styleUrls: ['./highlights-banner.component.scss'],
})
export class HighlightsBannerComponent implements OnInit {
  @Input() slides!: Islide[];
  @Output() colorChange: EventEmitter<string> = new EventEmitter<string>();

  currentIndex: number = 0;

  ngOnInit(): void {}

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.currentIndex = newIndex;
  }

  goToSlide(slideIndex: number): void {
    this.currentIndex = slideIndex;
    this.colorChange.emit(this.slides[this.currentIndex].colorCode);
  }

  getCurrentSlideUrl() {
    return `${this.slides[this.currentIndex]?.imgUrl}`;
  }

  getCurrentTitle() {
    return this.slides[this.currentIndex].title;
  }

  getCurrentCategory() {
    return this.slides[this.currentIndex].category;
  }

  getCurrentBrief() {
    return this.slides[this.currentIndex].brief;
  }

  getCurrentColor() {
    return `#${this.slides[this.currentIndex].colorCode}`;
  }

  openUrl() {
    const url = this.slides[this.currentIndex].itemUrl;
    if (url) {
      window.open(this.slides[this.currentIndex].itemUrl, '_blank');
    } else {
      window.open('https://linkdevelopment.com/', '_blank');
    }
  }
}
