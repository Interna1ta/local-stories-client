import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../../services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-followers-page',
  templateUrl: './followers-page.component.html',
  styleUrls: ['./followers-page.component.scss']
})
export class FollowersPageComponent implements OnInit {

  users: Array<any>;
  user: any;
  idUser: string;
  usersData: any;
  followBoolean: boolean;

  constructor(private usersService: UsersService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.params.subscribe((params) => {
      this.idUser = params.id;
      this.usersService.userFollowers(this.idUser)
        .then((data) => {
          this.usersData = data;
          this.followBoolean = true;
          if (this.usersData.length === 0) {
            this.followBoolean = false;
          }
          this._getEveryFollower();
        })
    })
  }

  _getEveryFollower() {
    for (let i = 0; i < this.usersData.length; i++) {
      this.user = this.usersData[i];
    }
  }

}

