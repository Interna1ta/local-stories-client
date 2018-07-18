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
  userMe: any;
  idUser: string;
  idMe: string;
  bothId: object;
  stories: Array<any>;
  iFollow: boolean;
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
    this.iFollow = false;
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
          this.checkFollowUser();
        })
    })
  }

  checkFollowUser() {
    this.authService.me()
      .then((data) => {
        this.userMe = data;
        this.idMe = data._id;
        if (this.idMe == this.idUser) {
          this.editButton = true;
        }
        this.bothId = {
          idUser: this.idUser,
          idMe: this.idMe
        }
        this.usersService.checkFollow(this.bothId)
          .then((data) => {            
            for (var i=0; i<data.following.length; i++) {
              if (data.following[i] == this.idUser) {
                this.iFollow = true;
              }
            }
            this.findUserStories();
          })
      }) 
  }

  findUserArticles() {
    this.articlesService.userArticles(this.idUser)
      .then((data) => {
        this.stories = data;
      })
  }

  findUserStories() {
    this.storiesService.userStories(this.idUser)
      .then((data) => {
        this.stories = data;
      })
  }

  followUser() {
    this.authService.me()
      .then((data) => {
        this.userMe = data;
        this.idMe = data._id;
        this.bothId = {
          idUser: this.idUser,
          idMe: this.idMe
        }
        this.iFollow = true;
        this.usersService.followOne(this.bothId)
          .then(() => {
            this.usersService.followOneNotification(this.bothId);
          })
      }) 
  }

  unfollowUser() {
    this.authService.me()
      .then((data) => {
        this.userMe = data;
        this.idMe = data._id;
        this.bothId = {
          idUser: this.idUser,
          idMe: this.idMe
        }
        this.iFollow = false;
        this.usersService.unfollowOne(this.bothId)
          .then((data) => {
          })
      })
  }
  
  listAllFollowers() {
    this.usersService.userFollowers(this.idUser)
      .then((data) => {
      })
  }

  editProfile() {
    this.router.navigate(['/profile/edit']);
  }

}
