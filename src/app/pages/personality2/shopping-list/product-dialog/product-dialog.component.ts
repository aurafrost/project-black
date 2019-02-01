import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

import {AngularFireStorage} from '@angular/fire/storage';

import {ProductService} from '../../../../core/services/product/product.service';
import {Product} from '../../../../core/models/Product';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';
import {AuthService} from '../../../../core/services/auth/auth.service';

@Component({
  selector: 'product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.css']
})
export class ProductDialogComponent implements OnInit {
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  private auth: any;

  url = null;
  basePath = 'Products';
  productFormData: FormGroup;

  constructor(
    private _authService: AuthService,
    private afStorage: AngularFireStorage,
    private _productService: ProductService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(this.data);
    this.productFormData = this.formInit();
  }

  ngOnInit() {
    this.auth = this._authService.getAuth().value;
  }

  selectFile(event) {
    const file = event.target.files[0];
    console.log(file);
    if (file.type.match('image.*')) {
      const fileRef = this.afStorage.ref(`${this.basePath}/${file.name}`);
      const task = this.afStorage.upload(`${this.basePath}/${file.name}`, file);

      // observe percentage changes
      this.uploadPercent = task.percentageChanges();
      // get notified when the download URL is available
      task.snapshotChanges().subscribe((data) => {
        console.log(data);
        this.url = fileRef.getDownloadURL()
          .subscribe(url => {
            this.url = url;
          });
      });
    } else {
      alert('invalid format!');
    }
  }

  formInit() {
    return new FormGroup({
      title: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(1)
      ])),
      price: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(1)
      ]))
    });
  }

  upload() {
    console.log(this.url);
    const p: Product = {
      ownerId: this.data.user.uid,
      img: this.url,
      title: this.productFormData.value.title,
      price: this.productFormData.value.price
    };
    this._productService.addProductById(this.auth.uid, p);
  }
}
