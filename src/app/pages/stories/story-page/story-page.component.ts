import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoriesService } from '../../../services/stories.service';

@Component({
  selector: 'app-story-page',
  templateUrl: './story-page.component.html',
  styleUrls: ['./story-page.component.scss']
})
export class StoryPageComponent implements OnInit {

  story: any;
  idStory: string;

  constructor(
    private storiesService: StoriesService, 
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe((params) => {
      this.idStory = params.id;
      this.storiesService.getOne(this.idStory)
        .then((data) => {
          this.story = data;
        })
    })
  }

}
