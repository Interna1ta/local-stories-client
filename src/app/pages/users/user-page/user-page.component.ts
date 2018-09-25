import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { StoriesService } from '../../../services/stories.service';
import { UsersService } from '../../../services/users.service';
import { AuthService } from '../../../services/auth.service';
import { ArticlesService } from '../../../services/articles.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  user: any;
  idUser: string;
  idMe: string;
  idUsers: object;
  stories: Array<any>;
  articles: Array<any>;
  checkFollow: boolean;
  editButton: boolean;

  constructor(
    private usersService: UsersService, 
    private storiesService: StoriesService, 
    private articlesService: ArticlesService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.checkFollow = false;
    this.editButton = false;
    this.listAllStories();
  }

  listAllStories() {
    this.activateRoute.params.subscribe((params) => {
      this.idUser = params.id;
      this.usersService.getOne(this.idUser)
        .then((data) => {
          this.user = data;
          this.idUser = data._id;
          this._checkFollowUser();
        })
    })
  }

  _checkFollowUser() {
    this.authService.me()
      .then((data) => {
        this.idMe = data._id;
        (this.idMe == this.idUser) ? this.editButton = true : this.editButton = false;
        this.idUsers = {
          idUser: this.idUser,
          idMe: this.idMe
        }
        this.usersService.checkFollow(this.idUsers)
          .then((data) => {            
            for (var i=0; i<data.following.length; i++) {
              if (data.following[i] == this.idUser) {
                this.checkFollow = true;
              }
            }
            this.findUserStories();
          })
      }) 
  }

  findUserArticles() {
    this.articlesService.userArticles(this.idUser)
      .then((data) => {
        data.reverse();
        this.stories = [];
        this.articles = data;
      })
  }

  findUserStories() {
    this.storiesService.userStories(this.idUser)
      .then((data) => {
        data.reverse();
        this.articles = [];
        this.stories = data;
      })
  }

  followUser() {
    this.checkFollow = true;
    this.usersService.followOne(this.idUsers)
      .then(() => {
        this.usersService.followOneNotification(this.idUsers);
      })
  } 

  unfollowUser() {
    this.checkFollow = false;
    this.usersService.unfollowOne(this.idUsers)
      .then(() => {})
  }
  
  listAllFollowers() {
    this.usersService.userFollowers(this.idUser)
      .then(() => {})
  }

  editProfile() {
    this.router.navigate(['/profile/edit']);
  }

  logout() {
    this.authService.logout()
      .then(() => {
        this.router.navigate(['/']);
      })
  }

}
