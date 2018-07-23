import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../../services/articles.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-single-article-page',
  templateUrl: './single-article-page.component.html',
  styleUrls: ['./single-article-page.component.scss']
})
export class SingleArticlePageComponent implements OnInit {

  idArticle: string;
  article: any;

  users: Array<any>;
  user: any;
  username: string;
  idUser: string;
  idUsers: any;
  idMe: string;
  checkFollow: boolean;

  constructor(
    private activateRoute: ActivatedRoute,
    private articlesService: ArticlesService,
    private authService: AuthService,
    private usersService: UsersService
  ) { }

  ngOnInit() {

    this.activateRoute.params.subscribe((params) => {
      this.idArticle = params.id;
      this.articlesService.getOne(this.idArticle)
        .then((data) => {
          this.article = data;
        })
        .then(() => {
          this._checkFollowUser();
        })
    })
    
  }

  _checkFollowUser() {
    this.authService.me()
      .then((data) => {
        this.idMe = data._id;
        this.idUser = this.article.user._id
        this.idUsers = {
          idUser: this.idUser,
          idMe: this.idMe
        }
        this.usersService.userFollowing(this.idMe)
          .then((data) => {
            this.user = data;
            console.log(data);
            if (this.user.following.length !== 0) {
              for (let i = 0; i < this.user.following.length; i++) {
                if (this.user.following[i]._id == this.idUser) {
                  this.checkFollow = true
                  i = this.user.following.length;
                } else if (this.idUser == this.idMe) {
                } else {
                  this.checkFollow = false;
                }
              }
            } else {
              this.checkFollow = false;
            }
          })
      })
  } 
}
 