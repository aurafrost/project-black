import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {} from '@angular/cli';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {User} from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userCollection:AngularFirestoreCollection<User>;
  private users: Observable<User[]>;
  private userArr: User[];
  private userDoc: AngularFirestoreDocument<User>;
  private authObj;

  constructor(
    private afstore: AngularFirestore
  ) { 
    this.userCollection = this.afstore.collection('test-users');

    this.users = this.userCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as User;
        data.uid = a.payload.doc.id;
        return data;
      })
    })

    this.users.subscribe(u => {
      this.userArr = u;
    })

    this.authObj = JSON.parse(localStorage.getItem('auth'));
  }

  getUser() {
    //return this.user;
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

  addSub(subId) {
    this.authObj = JSON.parse(localStorage.getItem('auth'));
    if(this.authObj == null)
      return;

    let tempSubs = [];
    //this.userCollection.doc(userId).set()

    this.users.subscribe(u => {
      this.userArr = u;
    })
    console.log(this.userArr);
    for(let user of this.userArr){
      if(user.uid === this.authObj.uid) 
      {
        tempSubs = [...user.subscriptions];
        tempSubs.push(subId);
        user.subscriptions = tempSubs;
        this.userCollection.doc(this.authObj.uid).set(user);
      }
    }
  }

  removeSub(subId) {
    this.authObj = JSON.parse(localStorage.getItem('auth'));
    if(this.authObj == null)
      return;

    let tempSubs = [];
    //this.userCollection.doc(userId).set()

    this.users.subscribe(u => {
      this.userArr = u;
    });

    for(let user of this.userArr){
      if(user.uid === this.authObj.uid)
      {
        tempSubs = [...user.subscriptions];
        let spot = tempSubs.indexOf(subId);
        if(spot == -1)
          return;
        
        tempSubs.splice(spot, 1);
        user.subscriptions = tempSubs;
        this.userCollection.doc(this.authObj.uid).set(user);
      }
    }
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
