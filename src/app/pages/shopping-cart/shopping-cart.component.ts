import { Component, OnInit } from '@angular/core';
import {CartService} from '../../core/services/cart/cart.service';
import {AuthService} from '../../core/services/auth/auth.service';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  private auth: any;
  private cart: any = [];
  constructor(
    private _authService: AuthService,
    private _cartService: CartService
  ) { }

  ngOnInit() {
    this.auth = this._authService.getAuth().value;
    console.log(this.auth);
    this._cartService.getCartItems(this.auth)
      .subscribe(data => {
        this.cart = data.map(i => {
          return {
            id: i.payload.doc.id,
            ...i.payload.doc.data()
          };
        });
      });
    
  }
}
