import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private afDatabase: AngularFireDatabase,
  ) { }

  getHomePageCategory(category) {
    console.log(category);
    return this.afDatabase.list(`hompage/${category}`).valueChanges();
  }
}
