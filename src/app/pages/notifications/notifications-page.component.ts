import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../../services/notifications.service';
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
    private authService: AuthService,
    private notificationsService: NotificationsService 
  ) { }

  ngOnInit() {
    this.listAllNotifications();
  }

  listAllNotifications() {
    this.authService.me()
      .then((data) => {
        this.idMe = data._id;
        this.notificationsService.getNotifications(this.idMe)
          .then((data) => {
            data.reverse();
            this.notifications = data;
          })
    })
  }

}
