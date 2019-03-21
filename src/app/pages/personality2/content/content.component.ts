import { Component, OnInit, ViewChild } from '@angular/core';
import { Post } from './post';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';
import {MatDialog, MatDialogRef} from '@angular/material';
import {PostDialogComponent} from './post-dialog/post-dialog.component';
import {PostService} from '../../../core/services/post/post.service';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  posts: any;
  batch = 20;
  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport;
  public uidParam;
  auth: any;
  postDialogRef: MatDialogRef<PostDialogComponent>;
  postsCollection: AngularFirestoreCollection<Post>;

  constructor(
    private db: AngularFirestore,
    private _postService: PostService,
    private _route: ActivatedRoute,
    private _authService: AuthService,
    private _dialog: MatDialog
  ) {
    this.uidParam = this._route.snapshot.params['id'];
  }

  ngOnInit() {
    this.auth = this._authService.getAuth().value;
    this.postsCollection = this.db.collection(`Users/${this.uidParam}/post`, ref => ref.orderBy('date', 'desc'));
    this.posts = this.postsCollection.valueChanges();
  }

  trackByIdx(i) {
    return i;
  }

  openDialog() {
    this.postDialogRef = this._dialog.open(PostDialogComponent, {
      data: {
        auth: this.auth,
      }
    });
  }

  displayId(x) {
    console.log(x);
  }

  deleteNote(postId) {
    this._postService.deletePost(this.auth.uid, postId);
  }
}
