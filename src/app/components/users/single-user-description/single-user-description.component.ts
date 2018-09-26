import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-single-user-description',
  templateUrl: './single-user-description.component.html',
  styleUrls: ['./single-user-description.component.scss']
})
export class SingleUserDescriptionComponent implements OnInit {

  @Input() follower: any;

  user: any;
  idUser: string;
  idMe: string;
  idUsers: object;
  checkFollow: boolean;
  editButton: boolean;

  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.editButton = false;
    this.userVisited();
  }

  userVisited() {
    this.activateRoute.params.subscribe((params) => {
      this.idUser = params.id;
      this.usersService.getOne(this.idUser)
        .then(() => {
          this._checkAuthUser();
        })
    })
  }

  _checkAuthUser() {
    this.authService.me()
      .then((data) => {
        this.idMe = data._id;
        this.idUsers = {
          idUser: this.follower._id,
          idMe: this.idMe
        }
        this._checkFollowingUser();
      })
  }

  _checkFollowingUser() {
    this.usersService.getOne(this.idMe)
      .then((data) => {
        this.user = data; 
        this.checkFollow = false;
        for (let i = 0; i < this.user.following.length; i++) {
          if (this.user.following[i] == this.follower._id) {
            this.checkFollow = true
            i = this.user.following.length;
          } else if (this.follower._id == this.idMe) {
            this.editButton = true
          }
        }
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
      .then(() => { })
  }
}
