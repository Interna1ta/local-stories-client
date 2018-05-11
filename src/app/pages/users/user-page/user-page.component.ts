import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { StoriesService } from '../../../services/stories.service';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  // @Input() user: Object;
  user: any;
  idUser: string;

  constructor(
    private usersService: UsersService, 
    private storiesService: StoriesService, 
    private router: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.params.subscribe((params) => {
      this.idUser = params.id;
      this.usersService.getOne(this.idUser)
        .then((data) => {
          this.user = data;
        })
    })
      
    // this.storiesService.listAllUser(this.id)
    //   .then((data) => {
    //     this.user = data;
    //     // this.id = data
    //   })
  }

}
