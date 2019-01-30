import { Component, OnInit } from '@angular/core';
import {ProductDialogComponent} from './product-dialog/product-dialog.component';
import {AuthService} from '../../../core/services/auth/auth.service';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../core/services/user/user.service';
import {ProductService} from '../../../core/services/product/product.service';
import {MatDialog, MatDialogRef} from '@angular/material';
import {map} from 'rxjs/operators';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  private auth: any;
  public uidParam;
  public user: any;
  public products: any = [];
  public events: any = [];
  public addItem;
  productDialogRef: MatDialogRef<ProductDialogComponent>;

  constructor(
    private _authService: AuthService,
    private _route: ActivatedRoute,
    private _userService: UserService,
    private _productService: ProductService,
    private _dialog: MatDialog
  ) {
    this.uidParam = this._route.snapshot.params['id'];
  }

  ngOnInit() {
    this.auth = this._authService.getAuth().value;
    console.log(this.uidParam);
    this.user = this._userService.getUserById(this.uidParam)
      .subscribe(data => {
        this.user = data;
        console.log(data);
      });
    this._productService.getProductsByUser(this.uidParam).subscribe( data => {
      this.products = data.map(i => {
          return {
            id: i.payload.doc.id,
            ...i.payload.doc.data()
          };
        });
    });

    console.log(this.products);

    // data => {
        // this.products = data;
        // console.log(data);
      // });
  }

  openDialog() {
    this.productDialogRef = this._dialog.open(ProductDialogComponent, {
      data: {
        auth: this.auth,
        user: this.user
      }
    });
  }

  // onAddToCartClick(productId, userId) {
  //   this.addItem = this._productService.getProductById(productId, userId)
  //     .subscribe(data => {
  //       this.addItem = data;
  //       this.addProductToCart(this.addItem);
  //     });
  // }

  addProductToCart(product) {
    console.log(product);
    this._productService.addProductToCart(this.auth.uid, product);
  }
}
