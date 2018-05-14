import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent implements OnInit {

  @Input() follower: Object;

  constructor() { console.log('olaoooooooooooo');}

  ngOnInit() {
    console.log('olaoooooooooooo');
  }

}
