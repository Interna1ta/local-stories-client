import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../../services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-following-page',
  templateUrl: './following-page.component.html',
  styleUrls: ['./following-page.component.scss']
})
export class FollowingPageComponent implements OnInit {

  users: Array<any>;
  user: any;
  username: string;
  idUser: string;
  iFollow: boolean;

  constructor(
    private usersService: UsersService, 
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe((params) => {
      this.idUser = params.id;
      this.usersService.userFollowing(this.idUser)
        .then((data) => {
          this.user = data;
          this.iFollow = true;
          this.users = this.user.following;
          // this._getEveryFollower();
        })
    })
  }

  _getEveryFollower() {
    for (let i = 0; i < this.user.following.length; i++) {
      console.log('im following', i, this.user.following[i].username);
      console.log(i, this.iFollow);
      this.users = this.user.following[i];
    }
  }
 
}   

 