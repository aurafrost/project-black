import { Component, OnInit } from '@angular/core';
import {UserService} from '../../core/services/user/user.service';
import {ProductService} from '../../core/services/product/product.service';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../../core/services/auth/auth.service';
import {MatDialog, MatDialogRef} from '@angular/material';
import {ProductDialogComponent} from '../profile/shopping-list/product-dialog/product-dialog.component';
import {SignInComponent} from '../../shared/dialog/sign-in/sign-in.component';
import {Product} from '../../core/models/Product';

@Component({
  selector: 'zb-test-profile',
  templateUrl: './zb-test-profile.component.html',
  styleUrls: ['./zb-test-profile.component.css']
})
export class ZbTestProfileComponent implements OnInit {
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
    private dialog: MatDialog
    ) {
    this.uidParam = this._route.snapshot.params['id'];
  }

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
    this.productDialogRef = this.dialog.open(ProductDialogComponent, {
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
