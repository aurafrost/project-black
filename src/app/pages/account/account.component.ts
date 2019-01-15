import { Component, OnInit } from '@angular/core';
import {UserService} from '../../core/services/user/user.service';
import { User } from 'src/app/core/models/User';

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user:User;
  constructor(
    private service:UserService,
  ) { }

  ngOnInit() {
    this.user=this.service.getUser();
  }

  edit(){
    //not complete. doubt update will work as is
    this.service.setUser(this.user.uid);
  }

  deleteAccount(){
    //need to add confirmation
    this.service.deleteUser(this.user.uid);
  }
}
