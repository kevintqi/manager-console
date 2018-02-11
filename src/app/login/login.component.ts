import { Component, OnInit } from '@angular/core';

import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private _user: User;
  private _rememberMe: boolean;

  constructor() { }

  ngOnInit() {
    this._user = new User('', '', '../../assets/manager.jpg');
  }

  get user(): User {
    return this._user;
  }

  get rememberMe(): boolean {
    return this._rememberMe;
  }

  set rememberMe(value: boolean) {
    this._rememberMe = value;
  }

  login() {
    console.log(JSON.stringify(this._user));
  }
}
