import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-followers-page',
  templateUrl: './add-followers-page.component.html',
  styleUrls: ['./add-followers-page.component.scss']
})
export class AddFollowersPageComponent implements OnInit {

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
