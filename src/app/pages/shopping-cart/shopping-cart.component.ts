import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../core/services/auth/auth.service';
import {UserService} from '../../core/services/user/user.service';
import {ProductService} from '../../core/services/product/product.service';
import {Product} from '../../core/models/Product';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  public auth: any;
  public cart: any = [];
  public sum = 0;
  constructor(
    private _authService: AuthService,
    private _productService: ProductService
  ) { }

  ngOnInit() {
    // Get Logged in Users Cart details
    this.auth = this._authService.getAuth().value;

    console.log(this.auth);
    this._productService.getCartItems(this.auth)
      .subscribe(data => {
        console.log(data);
        this.cart = [];
        this.sum = 0;
        let index = 0;
        console.log(data)
        data.map((i: Product) => {
          console.log(i)

          this._productService.getProductById(i.ownerId, i.productId)
            .subscribe((product) => {
              console.log(i)
              //loop here since same product
              if(i.quantity == null)
              {
                const prod = <Product> product.payload.data();
                this.cart[index] = <Product> {
                  productId: product.payload.id,
                  quantity: i.quantity,
                  ...product.payload.data()
                };
                this.sum += prod.price;
                index++;
              }

              for(let w = 0; w < i.quantity; w++)
              {
                const prod = <Product> product.payload.data();
                this.cart[index] = <Product> {
                  productId: product.payload.id,
                  quantity: i.quantity,
                  ...product.payload.data()
                };
                this.sum += prod.price;
                index++;
              }
            });

          
        });
        console.log(this.cart);
      });
  }

  removeItem(product: Product) {
    this._productService.removeCartItem(this.auth.uid, product.productId);
  }

  logCart(){
    console.log(this.cart)
  }
}
