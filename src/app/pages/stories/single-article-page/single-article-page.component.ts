import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../../services/articles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-article-page',
  templateUrl: './single-article-page.component.html',
  styleUrls: ['./single-article-page.component.scss']
})
export class SingleArticlePageComponent implements OnInit {

  idArticle: string;
  article: any;

  constructor(
    private activateRoute: ActivatedRoute,
    private articlesService: ArticlesService
  ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe((params) => {
      this.idArticle = params.id;
      this.articlesService.getOne(this.idArticle)
        .then((data) => {
          this.article = data;
        })
    })
  }

}
