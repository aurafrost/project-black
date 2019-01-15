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
