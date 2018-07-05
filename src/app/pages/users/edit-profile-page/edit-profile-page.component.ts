import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../services/auth.service';
import { UsersService } from '../../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile-page',
  templateUrl: './edit-profile-page.component.html',
  styleUrls: ['./edit-profile-page.component.scss']
})
export class EditProfilePageComponent implements OnInit {

  user: any;
  id: any;
  username: String;
  name: String;
  biography: String;

  feedbackEnabled = false;
  error = null;
  processing = false;

  constructor(
    private authService: AuthService, 
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.me()
      .then((data) => {
        this.user = data;
        this.id = data._id;
      })
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      const user = {
        id: this.id,
        username: this.username,
        name: this.name,
        description: this.biography
      }
      this.usersService.editProfile(user)
        .then((result) => {
          this.router.navigate(['/']);
          // this.router.navigate(['/users', this.id]);
        })
        .catch((err) => {
          this.error = err.error.code;
          this.processing = false;
          this.feedbackEnabled = false;
        });
    }
  }

  

}
