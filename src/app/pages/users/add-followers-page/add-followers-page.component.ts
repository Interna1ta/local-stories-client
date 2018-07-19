import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-add-followers-page',
  templateUrl: './add-followers-page.component.html',
  styleUrls: ['./add-followers-page.component.scss']
})
export class AddFollowersPageComponent implements OnInit {

  users: Array<any>;
  user: any;
  idUser: string;
  usersData: any;
  checkFollow: boolean;

  constructor(
    private activateRoute: ActivatedRoute,
    private usersService: UsersService 
  ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe((params) => {
      this.idUser = params.id;
      this.usersService.addFollowers(this.idUser)
        .then((data) => {
          console.log(data);
          this.usersData = data;
          this.checkFollow = true;
          if (this.usersData.length == 0) {
            this.checkFollow = null;
          }
          this._getEveryFollower();
        })
    })
  }

  _getEveryFollower() {
    for (let i = 0; i < this.usersData.length; i++) {
      console.log(this.usersData[i]);
      this.user = this.usersData[i];
    }
  }

}
