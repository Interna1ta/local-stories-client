import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../services/auth.service';
import { StoriesService } from '../../../services/stories.service';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  
  // @Input() user: Object;
  user: any;
  id: any;
  stories: Array<any>;
  iFollow: boolean;

  constructor(
    private authService: AuthService, 
    private storiesService: StoriesService, 
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.listAllStories();
  }

  listAllStories() {
    this.authService.me()
      .then((data) => {
        this.user = data;
        this.id = data._id;
        this.storiesService.userStories(this.id)
          .then((data) => {
            this.stories = data;
            this.checkFollowMe();
          })
      }) 
  } 
  
  checkFollowMe() {
    this.authService.me()
      .then((data) => {
        this.user = data;
        this.id = data._id;

        this.usersService.checkFollowMe(this.id)
          .then((data) => {
            (data == true) ? this.iFollow = true : this.iFollow = false;
            console.log('PUTA BIDAAAAAAA2');
            console.log(data);
          })
      })
  }

  logout() {
    this.authService.logout()
      .then(()=>{
        this.router.navigate(['/']);
      })
  }

  editProfile() {}

  listAllFollowing() {

  }

  listAllFollowers() {

  }

}
