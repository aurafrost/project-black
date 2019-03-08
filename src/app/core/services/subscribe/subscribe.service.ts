import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {
  public auth = null;
  public subscribers = new BehaviorSubject<any>(null);
  $subscribers = this.subscribers.asObservable();
  constructor(
    private _afStore: AngularFirestore,
  ) {}

  setSubscriptions(auth) {
    this._afStore.collection(`Users/${auth.uid}/subscriptions`).valueChanges()
      .subscribe(data => {
        if (this.subscribers.next && data.length > 0) {
          this.subscribers.next(data);
        }
      });
  }

  getSubscribers() {
    return this.subscribers;
  }

  checkIfSubscribed(authId, subscriberId) {
    return this._afStore.doc(`Users/${authId}/subscriptions/${subscriberId}`).snapshotChanges();
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
