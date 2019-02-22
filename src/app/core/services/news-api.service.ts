import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DatePipe} from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  //remove this key if going past prototype stage
  api_key = '0883473f772048edac036a7e8d00ce5f';

  constructor(
    private http: HttpClient
  ) { }
  // initSources() {
  //   return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.api_key);
  // }
  initArticles(topic) {
    return this.http.get('https://newsapi.org/v2/everything?q='+topic+'&apiKey=' + this.api_key);
  }
  getArticlesByID(source: String) {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.api_key);
  }

  getLatestNews(topic) {
    const date = new DatePipe('en').transform(new Date(), 'yyyy-MM-dd');
    return this.http.get(`https://newsapi.org/v2/everything?q=${topic}&apiKey=${this.api_key}&sortBy=popularity}`);
  }
}
