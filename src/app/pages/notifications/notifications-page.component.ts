import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UsersService } from '../../services/users.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-notifications-page',
  templateUrl: './notifications-page.component.html',
  styleUrls: ['./notifications-page.component.scss']
})
export class NotificationsPageComponent implements OnInit {

  notifications: any;
  userMe: any;
  idUser: string;
  idMe: string;
  
  constructor(
    private usersService: UsersService, 
    private router: Router,
    private activateRoute: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.ListAllNotifications();
  }

  ListAllNotifications() {
    this.authService.me()
      .then((data) => {
        this.userMe = data;
        this.idMe = data._id;
        this.usersService.getNotifications(this.idMe)
          .then((data) => {
            this.notifications = data;
          })
    })
  }

}
