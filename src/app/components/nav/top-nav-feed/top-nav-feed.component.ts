import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-top-nav-feed',
  templateUrl: './top-nav-feed.component.html',
  styleUrls: ['./top-nav-feed.component.scss']
})
export class TopNavFeedComponent implements OnInit {

  user: any;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.user = this.authService.getUser();
  }

}