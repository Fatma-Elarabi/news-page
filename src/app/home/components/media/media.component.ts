import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomePageService } from '../../services/home-page.service';
import { Subject, takeUntil } from 'rxjs';
import { Inews, InewsCategories, InewsCategory } from '../../models/news.model';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
})
export class MediaComponent implements OnInit, OnDestroy {
  private readonly destroyed$ = new Subject<void>();
  newsCategory!: InewsCategory[];
  news!: Inews[];
  filteredNews!: Inews[];
  selectedCategory = 0;
  NewsNotFoundMessage = 'No news for this category!';

  constructor(private homeService: HomePageService) {}

  ngOnInit(): void {
    this.getNewsList();
    this.getNewsCategory();
  }

  getNewsList() {
    this.homeService
      .getNewsList()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((news) => {
        this.news = news.News.filter((news) => {
          return news.showOnHomepage === 'yes';
        });
        this.filteredNews = this.sortNewsByData();
      });
  }

  getNewsCategory() {
    this.homeService
      .getNewsCategory()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((category: InewsCategories) => {
        this.newsCategory = category.newsCategory;
      });
  }

  sortNewsByData() {
    return this.news.sort((a, b) => {
      return <any>new Date(b.publishedDate) - <any>new Date(a.publishedDate);
    });
  }

  onSelectCategory(selectedCategory: number) {
    this.selectedCategory = selectedCategory;
    if (selectedCategory === 0) {
      this.filteredNews = this.sortNewsByData();
    } else {
      this.filteredNews = this.sortNewsByData().filter(
        (x) => x.categoryID === selectedCategory.toString()
      );
    }
  }

  getNewsCategoryName(id: string) {
    return this.newsCategory.find((element) => {
      return element.id === Number(id);
    })?.name;
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
