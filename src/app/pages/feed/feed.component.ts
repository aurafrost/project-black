import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../../core/services/auth/auth.service';
import {Post} from '../content/post';
import {SubscribeService} from '../../core/services/subscribe/subscribe.service';
import {PostService} from '../../core/services/post/post.service';

@Component({
  selector: 'feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  auth: any = null;
  feed: any = [];
  subscribers: any = null;
  feedCollection: AngularFirestoreCollection<Post>;
  constructor(
    private db: AngularFirestore,
    private _route: ActivatedRoute,
    private _subscriberService: SubscribeService,
    private _postService: PostService,
    private _authService: AuthService,
    private _afStore: AngularFirestore
  ) { }

  ngOnInit() {
    this.auth = this._authService.getAuth().value;
    this.subscribers = this._subscriberService.getSubscribers().value;

    if (this.subscribers) {
     this.subscribers.map(data => {
        return this._afStore.collection(`Users/${data.subscriberId}/post`).valueChanges()
          .subscribe(post => {
            this.feed = [...this.feed, ...post];
            console.log(this.feed);
        });
        // const posts = this._afStore.collection(`Users/${data.subscriberId}/post`).valueChanges();
        // this.feed = [...this.feed, ...posts];
      });
    }
  }

  trackByIdx(i) {
    return i;
  }

  likePost(id) {
   this._postService.likePost(this.auth.uid, id);
  }

  deletePost(id ) {
    this._postService.deletePost(this.auth.uid, id);
  }
}
