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
  idUser: string;
  usersData: any;
  followBoolean: boolean;

  constructor(private usersService: UsersService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.params.subscribe((params) => {
      this.idUser = params.id;
      this.usersService.userFollowing(this.idUser)
        .then((data) => {
          this.user = data;
          this.followBoolean = true;
          if (this.user.following.length === 0) {
            this.followBoolean = false;
          }
        })
    })
  }

}

