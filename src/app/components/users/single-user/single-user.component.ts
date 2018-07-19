import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  idUsers: object;
  checkFollow: boolean;
  samePerson: boolean;

  constructor(
    private usersService: UsersService,
    private authService: AuthService,
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
          this._checkFollowUser();
        })
    })
  }

  _checkFollowUser() {
    this.authService.me()
      .then((data) => {
        this.userMe = data;
        this.idMe = data._id;
        this.idUsers = {
          idUser: this.follower._id,
          idMe: this.idMe
        }
        this.usersService.userFollowing(this.idMe)
          .then((data) => {
            this.userMe = data;
            if (this.userMe.following.length !== 0) {
              this.samePerson = false;
              for (let i = 0; i < this.userMe.following.length; i++) {
                if (this.userMe.following[i]._id == this.follower._id) {
                  this.checkFollow = true
                  i = this.userMe.following.length;
                } else if (this.follower._id == this.idMe) {
                  this.samePerson = true;
                } else {
                  this.checkFollow = false;
                }
              }
            } else {
              this.samePerson = false;
              this.checkFollow = false;
            }
          })
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
}
