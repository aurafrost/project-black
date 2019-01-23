import { Component, OnInit } from '@angular/core';
import { User } from '../../core/models/User';
import { UserService } from '../../core/services/user/user.service';

@Component({
  selector: 'test-display',
  templateUrl: './test-display.component.html',
  styleUrls: ['./test-display.component.css']
})
export class TestDisplayComponent implements OnInit {
  users: User[];

  constructor(private us: UserService) { }

  ngOnInit() {
    this.us.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }

  click(num:number){
    this.us.addSub(num);
  }
  clickRemove(num:number){
    this.us.removeSub(num);
  }
  showAuth(){
    const authObj = JSON.parse(localStorage.getItem('auth'));
    console.log(authObj);
  }
}
