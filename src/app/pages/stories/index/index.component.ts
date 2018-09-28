import { Component, OnInit } from '@angular/core';

import { StoriesService } from '../../../services/stories.service';
import { AuthService } from '../../../services/auth.service';
import { ArticlesService } from '../../../services/articles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  articles: Array<any> = []; 
  stories: Array<any>;
  user: any;
  idUser: string;
  idMe: string;
  idUsers: object;
  checkFollow: boolean;

  constructor(
    private storiesService: StoriesService, 
    private authService: AuthService,
    private router: Router,
    private articlesService: ArticlesService
  ) { }

  ngOnInit() {
    this.checkFollow = false;
    this.listAllStories();
    this.listLastArticle();
    this.checkAuthUser();
  }

  listAllStories() {
    this.storiesService.listAll()
      .then((data) => {
        this.stories = data;
      })
  }

  listLastArticle() {
    this.articlesService.listAll()
      .then((data) => {
        this.articles.push(data[0]);
        this.articles.push(data[1]);
      })
  }

  checkAuthUser() {
    this.authService.me()
      .then((data) => {
        this.user = data;
        this.idMe = data._id;
      })
  }

  listStoriesUsersFollowing() {
    this.stories = [];
    for (let i = 0; i < this.user.following.length; i++) {
      this.idUser = this.user.following[i];
      this.storiesService.userStories(this.idUser)
        .then((result) => {
          for (let j = 0; j < result.length; j++) {
            this.stories.unshift(result[j]);
          }
        })
    }
  }

  listAllNews() {
    this.router.navigate(['/news']);
  }

  listAllUsers() {
    this.router.navigate(['/profile', this.idMe, 'addfollowers']);
  }

}
