import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-add-friends',
  templateUrl: './add-friends.component.html',
  styleUrls: ['./add-friends.component.scss']
})
export class AddFriendsComponent implements OnInit {

  users: Array<any>;
  user: any;
  checkFollow: boolean;
  idUser: string;

  constructor(
    private activateRoute: ActivatedRoute,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe((params) => {
      this.idUser = params.id;
      this.usersService.addFollowers(this.idUser)
        .then((data) => {
          this.users = data;
          this._getEveryFollower();
        })
    })
  }

  _getEveryFollower() {
    for (let i = 0; i < this.users.length; i++) {
      this.user = this.users[i];
    }
  }

}
