import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../services/users.service';

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
  checkFollow: boolean;

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
          (this.user.following.length == 0) ? this.checkFollow = false 
          : (this.checkFollow = true, 
             this.users = this.user.following)
        })
    })
  }
 
}   

 