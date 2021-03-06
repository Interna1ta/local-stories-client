import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoriesService } from '../../../services/stories.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-single-story-page',
  templateUrl: './single-story-page.component.html',
  styleUrls: ['./single-story-page.component.scss']
})
export class SingleStoryPageComponent implements OnInit {

  idStory: string;
  story: any;
  idMe: string;
  idUser: string;
  editButton: boolean = false;

  constructor(
    private storiesService: StoriesService,
    private activateRoute: ActivatedRoute,
    private authService: AuthService,
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
        this.idMe = data._id;
        (this.idMe == this.idUser) ? this.editButton = true : this.editButton = false;
      })
  }

  deleteStory() {
    this.storiesService.deleteStory(this.idStory)
      .then(() => {
        this.router.navigate(['/stories']);
      })
  }

}
