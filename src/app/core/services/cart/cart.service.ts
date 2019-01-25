import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private _afFirestore: AngularFirestore,
    private _router: Router
  ) { }

  getCartItems(auth) {
    return this._afFirestore
      .collection(`Users/${auth.uid}/cart`)
      .snapshotChanges();
  }

  addItemToCart() {

  }

  removeItemFromCart() {

  }
}
