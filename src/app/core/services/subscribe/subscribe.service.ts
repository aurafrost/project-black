import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {BehaviorSubject} from 'rxjs';
import {AuthService} from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {
  public auth = null;
  public subscribers = new BehaviorSubject<any>(null);
  $subscribers = this.subscribers.asObservable();
  constructor(
    private _afStore: AngularFirestore,
  ) {
  }

  setSubscriptions(auth) {
    this._afStore.collection(`Users/${auth.uid}/subscriptions`).valueChanges()
      .subscribe(data => {
        if (this.subscribers.next && data.length > 0) {
          this.subscribers.next(data);
          console.log('SUBSCRIBERS');
          console.log(data);
        }
      });
  }

  getSubscribers() {
    console.log(this.subscribers);
    return this.subscribers;
  }

  isSubscribed(subscriberId): boolean {
    console.log(this.subscribers.value);
    const isSub = this.subscribers.value.includes(subscriberId);
    console.log(isSub);
    return isSub;
  }

  checkIfSubscribed(authId, subscriberId) {
    return this._afStore.doc(`Users/${authId}/subscriptions/${subscriberId}`).snapshotChanges();
  }

  checkSubscribed(auth, subscriberId) {
    this._afStore.doc(`Users/${auth.uid}/subscriptions/${subscriberId}`).snapshotChanges()
      .subscribe(i => {
        console.log(i.payload.exists);
        return i.payload.exists;
      });
  }

  addSubscription(authId, subscriberId) {
    this._afStore.doc(`Users/${authId}/subscriptions/${subscriberId}`).set({
      subscriberId: subscriberId
    });
  }

  removeSubscription(authId, subscriberId) {
    this._afStore.doc(`Users/${authId}/subscriptions/${subscriberId}`).delete();
  }
}
