import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {} from '@angular/cli';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {User} from '../../models/User';
import { SubscriptionService } from '../sub/subscription.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userCollection: AngularFirestoreCollection<User>;
  private users: Observable<User[]>;
  private userArr: User[];
  private userDoc: AngularFirestoreDocument<User>;
  private authObj;
  private SubObs: Observable<any>;
  constructor(
    private afstore: AngularFirestore,
    private ss: SubscriptionService
  ) {
    this.userCollection = this.afstore.collection('test-users');

    this.users = this.userCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as User;
        data.uid = a.payload.doc.id;
        return data;
      });
    })

    // this.users.subscribe(u => {
    //   this.userArr = u;
    //   this.userArr.forEach(user => {
    //     console.log(this.ss.getSubCollection(user.uid))
    //     this.SubObs = this.ss.getSubCollection(user.uid);
    //     this.SubObs.subscribe(l => {
    //       console.log(l);
    //       user.subscriptions = l;
    //     })
    //   })
    //   console.log(this.userArr);
    // })
    this.authObj = JSON.parse(localStorage.getItem('auth'));
  }

  getUser() {
    // return this.user;
  }

  getUsers() {
    //return this.afDatabase.list(`/Users/`);
    //return this.afstore.collection()
  }

  setUser(userId) {
    //this.user = this.afDatabase.object(`Users/${userId}`);
  }

  createUser(userId, user) {
    //return this.afDatabase.object(`Users/${userId}`).set(user);
    this.userCollection.doc(userId).set(Object.assign({}, user));
    
  }

  //currently implemented in service, but DO NOT USE
  //is not accessable from site and will not remove user login information from auth service
  deleteUser(userId) {
    //this.afDatabase.object(`Users/${userId}`).remove();
    this.userDoc = this.userCollection.doc(userId);
    this.userDoc.delete();
  }

  getUserById(userId){

  }

  getAllUsers(){
    //this.users = this.afstore.collection('test-users').valueChanges();
    return this.users;
  }
}
