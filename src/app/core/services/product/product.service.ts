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

  getProducts(userId) {
    return this.afFirestore.collection(`Users/${userId}/products`).valueChanges();
  }


  getProductById(userId, productId) {
    return this.afFirestore.doc(`Users/${userId}/products/${productId}`).snapshotChanges(); // valueChanges().pipe(take(1));
  }

  addProductById(authId, product) {
    console.log(authId)
    console.log(product);
    return this.afFirestore.collection(`Users/${authId}/products`).add(product);
  }

  addProductToCart(authId, product) {
    let doc;
    let out;
    this.afFirestore.doc(`Users/${authId}/cart/${product.id}`).snapshotChanges().subscribe(doc => {
      console.log(doc);
      

      if(product.quantity == null || Number.isNaN(product.quantity))
      {
        console.log("HIT TOP")
        out = this.afFirestore.doc(`Users/${authId}/cart/${product.id}`)
        .set({productId: product.id, ownerId: product.ownerId, quantity: 1});
      }
      else
      {
        console.log("HIT BOTTOM")
        out = this.afFirestore.doc(`Users/${authId}/cart/${product.id}`)
        .set({productId: product.id, ownerId: product.ownerId, quantity: product.quantity+1});
      }
    });
    console.log(doc);

    return out;
  }

  getCartItems(auth) {
    return this.afFirestore.collection(`Users/${auth.uid}/cart`).valueChanges();
  }

  removeCartItem(authId, productId) {
    this.afFirestore.doc(`Users/${authId}/cart/${productId}`).delete();
  }
}
