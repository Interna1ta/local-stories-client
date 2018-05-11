import { Component, OnInit } from '@angular/core';

import { StoriesService } from '../../../services/stories.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  stories: Array<any>;

  constructor(private storiesService: StoriesService) { }

  ngOnInit() {
    this.storiesService.listAll()
      .then((data) => {
        this.stories = data;
      })
  }

}
