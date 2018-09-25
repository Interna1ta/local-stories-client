import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../../services/articles.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {

  articles: Array<any>;

  constructor(
    private articlesService: ArticlesService
  ) { }

  ngOnInit() {
    this.ListAllArticles();
  }

  ListAllArticles() {
    this.articlesService.listAll()
      .then((data) => {
        this.articles = data;
      })
  }

} 
