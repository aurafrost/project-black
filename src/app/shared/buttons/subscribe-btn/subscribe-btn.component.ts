import {Component, Input, OnInit} from '@angular/core';
import {SubscribeService} from '../../../core/services/subscribe/subscribe.service';
import {AuthService} from '../../../core/services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'subscribe-btn',
  templateUrl: './subscribe-btn.component.html',
  styleUrls: ['./subscribe-btn.component.css']
})
export class SubscribeBtnComponent implements OnInit {
  @Input('subscibeId') subscribeId;
  auth = null;
  isSubscribed: boolean;

  constructor(
    private _router: Router,
    private _authService: AuthService,
    private _subscribeService: SubscribeService
  ) { }

  ngOnInit() {
    this.auth = this._authService.getAuth().value;
    this._subscribeService.checkIfSubscribed(this.auth.uid, this.subscribeId)
      .subscribe(item => {
        this.isSubscribed = item.payload.exists;
    });
  }

  toggleSubscription() {
    console.log(this.subscribeId);
    if (this.isSubscribed) {
      this._subscribeService.removeSubscription(this.auth.uid, this.subscribeId);
      this._subscribeService.setSubscriptions(this.auth.uid);
      if (this._router.url.split('/')[1] === 'profile') {
        this._router.navigate(['/']);
      }
    } else {
      this._subscribeService.addSubscription(this.auth.uid, this.subscribeId);
      this._subscribeService.setSubscriptions(this.auth.uid);
    }
    this.isSubscribed = !this.isSubscribed;
  }
}
