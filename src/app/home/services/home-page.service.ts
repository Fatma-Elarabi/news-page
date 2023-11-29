import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Islides } from '../models/banner.model';
import { Inews, InewsCategories, InewsList } from '../models/news.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HomePageService {
  constructor(private httpClient: HttpClient) {}

  getBanner(): Observable<Islides> {
    return this.httpClient
      .get<Islides>(`${environment.baseUrl}fee177346e7875554413`)
  }

  getNewsList(): Observable<InewsList> {
    return this.httpClient
      .get<InewsList>(`${environment.baseUrl}d275425a434e02acf2f7`)
  }

  getNewsById(id: number): Observable<Inews> {
    return this.httpClient
      .get<Inews>(`${environment.baseUrl}d275425a434e02acf2f7/News/${id}`)
  }

  getNewsCategory(): Observable<InewsCategories> {
    return this.httpClient
      .get<InewsCategories>(`${environment.baseUrl}91298d970c27e9a06518`)
  }
}
