import { Component, OnInit } from '@angular/core';

import { StoriesService } from '../../../services/stories.service';
import { UsersService } from '../../../services/users.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  stories: Array<any>;
  tweets: any;
  user: any;
  idUser: string;

  constructor(
    private storiesService: StoriesService, 
    private usersService: UsersService, 
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.ListAllStories();
  }

  ListAllStories() {
    this.storiesService.listAll()
      .then((data) => {
        this.stories = data;
      })
  }

  FollowingUserStories() {
    this.stories = [];
    this.user = '';
    this.authService.me()
      .then((data) => {
        this.tweets = [];
        this.user = data;
        this.idUser = data._id;
        this.usersService.userFollowing(this.idUser)
          .then((data) => {
            // this.user = data
            // console.log('blabla', data);
          })
        console.log(this.user);
        console.log(this.user.following);
        for (let i = 0; i < this.user.following.length; i++) {
          this.storiesService.userStories(this.user.following[i])
            .then((result) => {
              for (let j = 0; j < this.user.following.length; j++) {
                if (result[j] !== undefined) {
                  this.stories.push(result[j]);
                }
              }
              // sort
              // this.stories.sort(function (a, b) {
              //   // ASC  -> a.length - b.length
              //   // DESC -> b.length - a.length
              //   return a.length - b.length || [a, b].sort()[0] === b;
              // });
              console.log(this.stories);

            })
        }        
      })
  }

}
