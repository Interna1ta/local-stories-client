import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { StoriesService } from '../../../services/stories.service';
import { UsersService } from '../../../services/users.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  // @Input() user: Object;
  user: any;
  userMe: any;
  idUser: string;
  idMe: string;
  bothId: object;
  // bothId: any;
  stories: Array<any>;

  constructor(
    private usersService: UsersService, 
    private storiesService: StoriesService, 
    private router: Router,
    private activateRoute: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.listAllStories();
    
  }

  listAllStories() {
    this.activateRoute.params.subscribe((params) => {
      this.idUser = params.id;
      this.usersService.getOne(this.idUser)
        .then((data) => {
          this.user = data;
          this.idUser = data._id;

          this.storiesService.userStories(this.idUser)
            .then((data) => {
              this.stories = data;
              // this.checkfollowUser();
            })

        })
    })
  }

  // checkfollowUser() {
  //   this.authService.me()
  //     .then((data) => {
  //       this.userMe = data;
  //       this.idMe = data._id;
  //       // this.bothId = [this.idUser, this.idMe]
  //       this.bothId = {
  //         idUser: this.idUser,
  //         idMe: this.idMe
  //       }
  //       console.log(this.bothId);
  //       this.usersService.checkAuthFollowing(this.bothId)
  //         .then((data) => {
  //           console.log('followOne yeah!');
  //         })
  //     }) 
  // }

  followUser() {
    this.authService.me()
      .then((data) => {
        this.userMe = data;
        this.idMe = data._id;
        this.bothId = {
          idUser: this.idUser,
          idMe: this.idMe
        }
        this.usersService.followOne(this.bothId)
          .then((data) => {
            console.log('followOne yeah!');
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
        this.usersService.unfollowOne(this.bothId)
          .then((data) => {
            console.log('unfollowOne yeah!');
          })
      })
  }

  listAllFollowing() {

  }

  listAllFollowers() {

  }

}
