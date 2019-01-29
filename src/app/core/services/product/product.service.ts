import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private afFirestore: AngularFirestore
  ) { }

  getProductsByUser(userId) {
    return this.afFirestore.collection(`Users/${userId}/products`).snapshotChanges();
  }

  getProductById(userId, productId) {
    return this.afFirestore.doc(`Users/${userId}/products/${productId}`).valueChanges().pipe(take(1));
  }

  addProductById(authId, product) {
    console.log(product);
    return this.afFirestore.collection(`Users/${authId}/products`).add(product);
  }

  addProductToCart(authId, product) {
    return this.afFirestore.doc(`Users/${authId}/cart/${product.id}`)
      .set({productId: product.id, ownerId: product.ownerId});
  }

  getCartItems(auth) {
    return this.afFirestore.collection(`Users/${auth.uid}/cart`).valueChanges();
  }
}
