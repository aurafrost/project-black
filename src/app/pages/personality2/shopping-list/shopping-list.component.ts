import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductDialogComponent} from './product-dialog/product-dialog.component';
import {AuthService} from '../../../core/services/auth/auth.service';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../core/services/user/user.service';
import {ProductService} from '../../../core/services/product/product.service';
import {MatDialog, MatDialogRef} from '@angular/material';
import {CdkVirtualScrollViewport} from '@angular/cdk/scrolling';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  private auth: any;
  public uidParam;
  public user: any;
  public products: any = [];
  productDialogRef: MatDialogRef<ProductDialogComponent>;
  batch = 20;
  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;

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
      });

    // this.products = this._productService.getProducts(this.uidParam);
    // console.log(this.products);
    this._productService.getProductsByUser(this.uidParam).subscribe( data => {
      this.products = data.map(i => {
          return {
            id: i.payload.doc.id,
            ...i.payload.doc.data()
          };
        });
      console.log(this.products);
    });
  }

  trackByIdx(i) {
    return i;
  }

  openDialog() {
    this.productDialogRef = this._dialog.open(ProductDialogComponent, {
      data: {
        auth: this.auth,
        user: this.user
      }
    });
  }

  addProductToCart(product) {
    console.log(product);
    this._productService.addProductToCart(this.auth.uid, product);
  }

  deleteProduct(product) {
    console.log(product)
  }
}
