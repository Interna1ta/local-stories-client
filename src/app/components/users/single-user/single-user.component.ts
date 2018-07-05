import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../../../services/auth.service';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent implements OnInit {

  @Input() follower: any;
  user: any;
  userMe: any;
  idUser: string;
  idMe: string;
  bothId: object;
  iFollow: boolean;
  samePerson: boolean;

  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.userVisited()
  }

  userVisited() {
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
        this.userMe = data;
        this.idMe = data._id;
        this.usersService.userFollowing(this.idMe)
          .then((data) => {
            this.userMe = data;
            if (this.userMe.following.length !== 0) {
              this.samePerson = false;
              for (let i = 0; i < this.userMe.following.length; i++) {
                if (this.userMe.following[i]._id == this.follower._id) {
                  this.iFollow = true
                  i = this.userMe.following.length;
                } else if (this.follower._id == this.idMe) {
                  this.samePerson = true;
                } else {
                  this.iFollow = false;
                }
              }
            } else {
              this.samePerson = false;
              this.iFollow = false;
            }
          })
      })
  }  

  followUser() {
    this.authService.me()
      .then((data) => {
        this.userMe = data;
        this.idMe = data._id;
        this.bothId = {
          idUser: this.follower._id,
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
          idUser: this.follower._id,
          idMe: this.idMe
        }
        this.iFollow = false;
        this.usersService.unfollowOne(this.bothId)
          .then((data) => {
            console.log('unfollowOne yeah!');
          })
      })
  }
}
