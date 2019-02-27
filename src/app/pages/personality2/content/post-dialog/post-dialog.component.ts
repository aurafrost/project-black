import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material';
import {AuthService} from '../../../../core/services/auth/auth.service';
import {PostService} from '../../../../core/services/post/post.service';
import {Post} from '../../../../core/models/Post';
import {AngularFireStorage} from '@angular/fire/storage';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.css']
})
export class PostDialogComponent implements OnInit {
  postFormData: FormGroup;
  uploadPercent: Observable<number>;
  auth: any = null;
  basePath = 'Post';
  url = null;

  constructor(
    private _afStore: AngularFirestore,
    private _afStorage: AngularFireStorage,
    private _authService: AuthService,
    private _postService: PostService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.postFormData = this.formInit();
  }

  ngOnInit() {
    this.auth = this._authService.getAuth().value;
  }

  formInit() {
    return new FormGroup({
      title: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(1)
      ])),
      caption: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(1)
      ])),
      img: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(1)
      ]))
    });
  }

  selectFile(event) {
    const file = event.target.files[0];
    console.log(file);
    if (file.type.match('image.*')) {
      const fileRef = this._afStorage.ref(`${this.basePath}/${file.name}`);
      const task = this._afStorage.upload(`${this.basePath}/${file.name}`, file);

      // observe percentage changes
      this.uploadPercent = task.percentageChanges();
      // get notified when the download URL is available
      task.snapshotChanges().subscribe((data) => {
        console.log(data);
        this.url = fileRef.getDownloadURL()
          .subscribe(url => {
            console.log(url);
            this.url = url;
          });
      });
    } else {
      alert('invalid format!');
    }
  }

  addPost() {
    const post: Post = {
      id: this._afStore.createId(),
      ownerId: this.auth.uid,
      img: this.url,
      title: this.postFormData.value.title,
      caption: this.postFormData.value.caption,
      date: Date.now()
    };
    console.log(post);
    const p = this._postService.addPost(this.auth.uid, post);
    console.log(p);
  }
}
