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
  idUser: String;
  username: String;
  name: String;
  description: String;

  feedbackEnabled = false;
  error = null;
  processing = false;

  selectedFile: File = null;

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
        this.username = data.username;
        this.name = data.name;
        this.description = data.description;
        this.usersService.getOne(this.id)
          .then((data) => {
            this.user = data;
            this.idUser = data._id;
            this.username = data.username;
            this.name = data.name;
            this.description = data.description;
          })
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
        description: this.description
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

  onFileSelected(event) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
    const fd = new FormData();
    fd.append("image", this.selectedFile, this.selectedFile.name);
    const user = {
      id: this.id,
      fd: fd
    } 
    this.usersService.uploadPicture(user)
      .then(result => {
        this.router.navigate(["/"]);
      });
  }

}
