import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-top-nav-profile',
  templateUrl: './top-nav-profile.component.html',
  styleUrls: ['./top-nav-profile.component.scss']
})
export class TopNavProfileComponent implements OnInit {

  user: any;
  id: any;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getMe();
  }

  getMe() {
    this.authService.me()
      .then((data) => {
        this.user = data;
        this.id = data._id;
      })
  } 

}
