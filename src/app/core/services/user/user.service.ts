import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {User} from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user;

  constructor(
    private afDatabase: AngularFireDatabase
  ) { }

  get currentUser(): User {
    return this.user;
  }

  getUser() {
    return this.user;
  }

  getUsers(){
    var list:any;
    this.afDatabase.list<User>(`/Users/`).snapshotChanges().subscribe(data=>{list=data;});
    console.log(list);
    return list;
  }

  setUser(userId) {
    this.user = this.afDatabase.object(`Users/${userId}`);
  }

  createUser(userId, user) {
    return this.afDatabase.object(`Users/${userId}`).set(user);
  }

  deleteUser(userId) {
    this.afDatabase.object(`Users/${userId}`).remove();
  }
}
