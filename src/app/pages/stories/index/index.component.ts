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
    this.storiesService.listAll()
      .then((data) => {
        this.stories = data;
      })

    this.authService.me()
      .then((data) => {
        this.user = data;
        this.idUser = data._id;
        this.usersService.userFollowing(this.idUser)
          .then((data) => {
            console.log('blabla', data);
          })
        for (let i = 0; i < this.user.following.length; i++) {
          this.storiesService.userStories(this.user.following[i]._id)
            .then((data) => {
              this.tweets += data;
              console.log(this.tweets);
            })
        }
      })

    // this.storiesService.listTweets()
    //   .then((data) => {
    //     this.stories = data;
    //   })
  }

}
