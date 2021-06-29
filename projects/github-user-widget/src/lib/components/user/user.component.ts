import { USERAPI } from './../../constants/user';
import { User } from './../../interfaces/user.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'guw-user',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent implements OnInit {

  user: User;
  constructor() { }

  ngOnInit(): void {
    this.user = USERAPI;
  }

}
