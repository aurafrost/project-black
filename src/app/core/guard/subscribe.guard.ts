import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../services/auth/auth.service';
import {SubscribeService} from '../services/subscribe/subscribe.service';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SubscribeGuard implements CanActivate {
  subcribers: any[];
  constructor(
    private _afStore: AngularFirestore,
    private _route: ActivatedRoute,
    private _subscribeService: SubscribeService,
    private _authService: AuthService,
    private _router: Router
  ) { }

  isSubscribed(subscriberId, arr): boolean {
    return arr.some(function(el) {
      console.log(subscriberId, el.subscriberId);
      return el.subscriberId === subscriberId;
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.subcribers = this._subscribeService.subscribers.value;
    const obj = {subscriberId: route.params['id']};
    console.log(obj);
    console.log(this.subcribers != null);
    if (this.subcribers != null) {
      console.log(this.subcribers.includes(obj));
    }

    if (this.subcribers !== null && this.isSubscribed(route.params['id'], this.subcribers)) {
      return true;
    }
    console.log('access denied!');
    alert('Please Subscriber to the account first!');
    return false;
  }
}

