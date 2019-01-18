import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {AuthService} from '../../../core/services/auth/auth.service';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public email = '';
  public password = '';
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  login() {
    this.authService.signIn(this.email, this.password)
      .then(res => console.log('Logged in!'))
      .catch(err => console.log(err.message));
  }
}
