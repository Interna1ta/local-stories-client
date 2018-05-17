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
  // idFollower: any;
  // idFollowerTrick: any;

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
          // this.idFollowerTrick = document.getElementById('myField');
          // this.idFollower = this.idFollowerTrick.value;
          // // this.idFollower = data.following;
          // console.log(this.idFollower);
          this.checkFollowUser();
        })
    })
  }
  
  _checkIfFollowed(): any {
    this.userMe.following.find((element) => {
      return element === this.follower._id;
    });
  }

  checkFollowUser() {
    this.authService.me()
      .then((data) => {
        this.userMe = data;
        this.idMe = data._id;
        if (this.idMe == this.idUser) {
          return this.router.navigate(['/profile']);
        }

        this.iFollow = !!this._checkIfFollowed()

        // console.log(this.idFollower);
        // this.bothId = {
        //   idUser: this.idFollower,
        //   idMe: this.idMe
        // }
        // this.usersService.checkFollow(this.bothId)
        //   .then((data) => {
        //     (data == true) ? this.iFollow = true : this.iFollow = false;
        //     console.log('PUTA BIDAAAAAAA');
        //     console.log(data);
        //   })
      })
  }


  followUser() {
    this.authService.me()
      .then((data) => {
        this.userMe = data;
        this.idMe = data._id;
        console.log('user user');
        console.log(this.follower._id);
        this.bothId = {
          idUser: this.follower._id,
          idMe: this.idMe
        }
        this.iFollow = true;
        console.log(this.bothId);
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
        console.log(this.follower._id);
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
