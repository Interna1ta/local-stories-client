import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-notifications-page',
  templateUrl: './notifications-page.component.html',
  styleUrls: ['./notifications-page.component.scss']
})
export class NotificationsPageComponent implements OnInit {

  notifications: any;
  idUser: string;
  idMe: string;
  
  constructor(
    private usersService: UsersService, 
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.ListAllNotifications();
  }

  ListAllNotifications() {
    this.authService.me()
      .then((data) => {
        this.idMe = data._id;
        this.usersService.getNotifications(this.idMe)
          .then((data) => {
            data.reverse();
            this.notifications = data;
          })
    })
  }

}
