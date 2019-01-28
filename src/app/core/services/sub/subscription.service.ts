import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {} from '@angular/cli';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {User} from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  private SubCollection: AngularFirestoreCollection;
  private SubObs: Observable<any>;
  private SubList: Object[];
  private authObj;

  constructor(private afs: AngularFirestore) {
    
  }

  getSubCollection(userId) {
    console.log("hit ss " + userId);
    this.SubCollection = this.afs.collection('test-users/' + userId + '/subscriptions/');

    return this.SubCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data();
        return data;
      });
    })
  }

  addSub(subId) {
    this.authObj = JSON.parse(localStorage.getItem('auth'));
    if(this.authObj == null)
      return;

    this.SubCollection = this.afs.collection('test-users/' + this.authObj.uid + '/subscriptions/');
    //this.userCollection.doc(userId).set()

    this.SubCollection.doc("" + subId).set({celebId:subId});
  }

  removeSub(subId) {
    this.authObj = JSON.parse(localStorage.getItem('auth'));
    if(this.authObj == null)
      return;

    this.SubCollection = this.afs.collection('test-users/' + this.authObj.uid + '/subscriptions/');
    //this.userCollection.doc(userId).set()

    this.SubCollection.doc("" + subId).delete();
  }
}
