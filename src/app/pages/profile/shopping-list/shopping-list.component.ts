import { Component, OnInit } from '@angular/core';
import {ProductDialogComponent} from './product-dialog/product-dialog.component';
import {AuthService} from '../../../core/services/auth/auth.service';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../core/services/user/user.service';
import {ProductService} from '../../../core/services/product/product.service';
import {MatDialog, MatDialogRef} from '@angular/material';

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
  ) { }

  ngOnInit() {
    this.auth = this._authService.getAuth().value;
    console.log(this.uidParam);
    this.user = this._userService.getUserById(this.uidParam)
      .subscribe(data => {
        this.user = data;
      });
    this._productService.getProductsByUser(this.uidParam)
      .subscribe(data => {
        this.products = data;
      });
    console.log(this.products);
    console.log(this.user);
  }

  openDialog() {
    this.productDialogRef = this._dialog.open(ProductDialogComponent, {
      data: {
        auth: this.auth
      }
    });
  }

  onAddToCartClick(productId, userId) {
    this.addItem = this._productService.getProductById(productId, userId)
      .subscribe(data => {
        this.addItem = data;
        this.addProductToCart(this.addItem);
      });
  }

  addProductToCart(item) {
    this._productService.addProductToCart('', item);
  }
}
