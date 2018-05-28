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

  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.iFollow = false;
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
  
  _checkIfFollowed(): any {
    this.userMe.following.find((element) => {
      return element === this.follower._id;
    });
  }

  _checkFollowUser() {
    this.authService.me()
      .then((data) => {
        this.userMe = data;
        this.idMe = data._id;
        if (this.idMe == this.idUser) {
          return this.router.navigate(['/profile']);
        }
        this.iFollow = !!this._checkIfFollowed()
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
