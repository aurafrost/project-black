import { Component, OnInit } from '@angular/core';
import {UserService} from '../../core/services/user/user.service';
import { User } from 'src/app/core/models/User';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:User;

  constructor() { }

  ngOnInit() {
  }

}
