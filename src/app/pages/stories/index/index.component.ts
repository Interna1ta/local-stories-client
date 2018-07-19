import { Component, OnInit } from '@angular/core';

import { StoriesService } from '../../../services/stories.service';
import { UsersService } from '../../../services/users.service';
import { AuthService } from '../../../services/auth.service';
import { ArticlesService } from '../../../services/articles.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  articles: Array<any> = [];
  stories: Array<any>;
  tweets: any;
  user: any;
  idUser: string;
  idMe: string;

  constructor(
    private storiesService: StoriesService, 
    private usersService: UsersService, 
    private authService: AuthService,
    private articlesService: ArticlesService
  ) { }

  ngOnInit() {
    this.ListAllStories();
    this.ListLastArticle();
  }

  ListAllStories() {
    this.storiesService.listAll()
      .then((data) => {
        data.reverse();
        this.stories = data;
      })
  }

  ListLastArticle() {
    this.articlesService.listAll()
      .then((data) => {
        this.articles.push(data[data.length - 1]);
      })
  }

  FollowingUserStories() {
    this.stories = [];
    this.authService.me() 
      .then((data) => {
        this.tweets = [];
        this.user = data;
        this.idMe = data._id;
        this.usersService.userFollowing(this.idMe)
          .then((data) => {
            this.user = data
            for (let i = 0; i < this.user.following.length; i++) {
              this.idUser = this.user.following[i]._id;
              this.storiesService.userStories(this.idUser)
                .then((result) => {
                  for (let j = 0; j < this.user.following.length; j++) {
                    if (result[j] !== undefined) {
                      this.stories.unshift(result[j]);
                    }
                  }
                })
            }        
          })
      })
  }

}
