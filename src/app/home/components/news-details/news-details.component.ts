import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomePageService } from '../../services/home-page.service';
import { Inews } from '../../models/news.model';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit, OnDestroy {

  private readonly destroyed$ = new Subject<void>();

  routeIdParam!: number;
  news!: Inews;

  constructor(private route: ActivatedRoute, private homeService: HomePageService) { }

  ngOnInit(): void {
    this.getSelectedNewsId();
    this.getNewsById();
  }

  getSelectedNewsId() {
    this.route.params.subscribe(params => {
      this.routeIdParam = params['id'];
    });
  }

  getNewsById() {
    this.homeService.getNewsById(this.routeIdParam).pipe(takeUntil(this.destroyed$)).subscribe( news=> {
      this.news = news;
    })
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}
