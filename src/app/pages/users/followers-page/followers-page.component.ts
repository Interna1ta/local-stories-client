import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-followers-page',
  templateUrl: './followers-page.component.html',
  styleUrls: ['./followers-page.component.scss']
})
export class FollowersPageComponent implements OnInit {

  users: Array<any>;
  user: any;
  idUser: string;
  // usersData: any;
  checkFollow: boolean;

  constructor(
    private activateRoute: ActivatedRoute,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe((params) => {
      this.idUser = params.id;
      this.usersService.userFollowers(this.idUser)
        .then((data) => {
          this.users = data;
          // this.usersData = data;
          this.checkFollow = true;
          (this.users.length == 0) ? this.checkFollow = false 
          // (this.usersData.length == 0) ? this.checkFollow = false 
          : this._getEveryFollower();
        })
    })
  }

  _getEveryFollower() {
    for (let i = 0; i < this.users.length; i++) {
      this.user = this.users[i];
    }
    // for (let i = 0; i < this.usersData.length; i++) {
    //   this.user = this.usersData[i];
    // }
  }

} 
 
