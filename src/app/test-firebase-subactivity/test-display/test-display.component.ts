import { Component, OnInit } from '@angular/core';
import { User } from '../../core/models/User';
import { UserService } from '../../core/services/user/user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { SubscriptionService } from '../../core/services/sub/subscription.service';

@Component({
  selector: 'test-display',
  templateUrl: './test-display.component.html',
  styleUrls: ['./test-display.component.css']
})
export class TestDisplayComponent implements OnInit {
  userArr: User[];
  private SubObs: Observable<any>;
  constructor(private us: UserService, private ss: SubscriptionService) { }

  ngOnInit() {
    this.us.getAllUsers().subscribe(u => {
      this.userArr = u;
      this.userArr.forEach(user => {
        console.log(this.ss.getSubCollection(user.uid))
        this.SubObs = this.ss.getSubCollection(user.uid);
        this.SubObs.subscribe(l => {
          user.subscriptions = l;
        })
      })
    })

  }

  click(num:number){
    this.ss.addSub(num);
  }
  clickRemove(num:number){
    this.ss.removeSub(num);
  }
  showAuth(){
    const authObj = JSON.parse(localStorage.getItem('auth'));
    console.log(authObj);
  }
}
