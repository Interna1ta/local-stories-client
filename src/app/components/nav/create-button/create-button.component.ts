import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-create-button',
  templateUrl: './create-button.component.html',
  styleUrls: ['./create-button.component.scss']
})
export class CreateButtonComponent implements OnInit {

  user: any;

  constructor(   
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.user = this.authService.getUser();
  } 

}
