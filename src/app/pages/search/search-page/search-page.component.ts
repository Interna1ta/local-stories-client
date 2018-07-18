import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../../services/articles.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

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
