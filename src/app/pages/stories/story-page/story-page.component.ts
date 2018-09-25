import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoriesService } from '../../../services/stories.service';
import { AuthService } from '../../../services/auth.service';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-story-page',
  templateUrl: './story-page.component.html',
  styleUrls: ['./story-page.component.scss']
})
export class StoryPageComponent implements OnInit {

  story: any;
  idStory: string;
  idMe: string;
  idUser: string;
  editButton: boolean = false;
  checkFollow: boolean = false;
  user: any;

  constructor(
    private storiesService: StoriesService, 
    private activateRoute: ActivatedRoute,
    private authService: AuthService,
    private usersService: UsersService, 
    private router: Router
  ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe((params) => {
      this.idStory = params.id;
      this.storiesService.getOne(this.idStory)
        .then((data) => {
          this.story = data;
          this.idUser = this.story.user._id;
          this._checkEditCredentials();
        })
    })
  }

  _checkEditCredentials() {
    this.authService.me()
      .then((data) => {
        this.user = data;
        this.idMe = data._id;
        (this.idMe == this.idUser) ? this.editButton = true 
          : this._checkFollowingUser();
      })
  } 

  _checkFollowingUser() {
    this.usersService.getOne(this.idUser)
      .then((data) => {
        for (var i = 0; i < data.following.length; i++) {
          if (data.following[i] == this.idMe) {
            this.checkFollow = true;
          }
        }
      })
  }

  deleteStory() {
    this.storiesService.deleteStory(this.idStory)
      .then(() => {
        this.router.navigate(['/stories']);
      })
  }

}
