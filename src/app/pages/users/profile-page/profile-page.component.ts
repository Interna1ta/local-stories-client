import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  
  user: any;
  id: any;

  constructor(
    private authService: AuthService, 
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.me()
      .then((data) => {
        this.user = data;
        this.id = data._id;
      })
  } 

  logout() {
    this.authService.logout()
      .then(()=>{
        this.router.navigate(['/']);
      })
  }

}
