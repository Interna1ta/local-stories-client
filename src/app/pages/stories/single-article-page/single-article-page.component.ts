import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../../services/articles.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-single-article-page',
  templateUrl: './single-article-page.component.html',
  styleUrls: ['./single-article-page.component.scss']
})
export class SingleArticlePageComponent implements OnInit {

  idArticle: string;
  article: any;

  user: any;
  idUser: string;
  idMe: string;
  editButton: boolean = false;

  constructor(
    private activateRoute: ActivatedRoute,
    private articlesService: ArticlesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe((params) => {
      this.idArticle = params.id;
      this.articlesService.getOne(this.idArticle)
        .then((data) => {
          this.article = data;
          this.idUser = this.article.user._id;
          this._checkEditCredentials();
        })
    })
  }

  _checkEditCredentials() {
    this.authService.me()
      .then((data) => {
        this.user = data;
        this.idMe = data._id;
        (this.idMe == this.idUser) ? this.editButton = true : this.editButton = false;
      })
  } 

  deleteArticle() {
    this.articlesService.deleteArticle(this.idArticle)
      .then(() => {
        this.router.navigate(['/stories']);
      })
  }

}
 