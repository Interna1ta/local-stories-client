import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../services/auth.service';
import { NotificationsService } from '../../../services/notifications.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  feedbackEnabled = false;
  error = null;
  processing = false;
  username: String;
  password: String;
  idUser: string;

  constructor(
    private authService: AuthService, 
    private notificationsService: NotificationsService, 
    private router: Router
  ) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      const user = {
        username: this.username,
        password: this.password
      }
      this.authService.signup(user)
        .then((data) => {
          this.idUser = data._id;
          this.notificationsService.signUpNotification(this.idUser);
          this.router.navigate(['/stories']);
        })
        .catch((err) => {
          this.error = err.error.code;
          this.processing = false;
          this.feedbackEnabled = false;
        });
    }
  }

} 