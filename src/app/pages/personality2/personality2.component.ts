import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../core/services/auth/auth.service';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../core/services/user/user.service';

@Component({
  selector: 'personality2',
  templateUrl: './personality2.component.html',
  styleUrls: ['./personality2.component.css']
})
export class Personality2Component implements OnInit {
  auth: any;
  public uidParam;
  public user: any;

  constructor(
    private _authService: AuthService,
    private _route: ActivatedRoute,
    private _userService: UserService,
  ) {
    this.uidParam = this._route.snapshot.params['id'];
  }

  ngOnInit() {
    this.auth = this._authService.getAuth().value;
    console.log(this.uidParam);
    console.log("AUTH")
    console.log(this.auth)
    this.user = this._userService.getUserById(this.uidParam)
      .subscribe(data => {
        this.user = data;
        console.log(data);
      });
  }

}
