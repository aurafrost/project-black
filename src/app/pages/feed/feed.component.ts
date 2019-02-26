import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../../core/services/auth/auth.service';
import {Post} from '../../core/models/Post';
import {SubscribeService} from '../../core/services/subscribe/subscribe.service';
import {PostService} from '../../core/services/post/post.service';
import {take} from 'rxjs/operators';
import {User} from '../../core/models/User';

@Component({
  selector: 'feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  auth: any = null;
  users: any = [];
  feed: any = [];
  subscribers: any = null;
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
      // Gets the subscribed users
      this.subscribers.map(user => {
        return this._afStore.doc(`Users/${user.subscriberId}`).valueChanges().pipe(take(1))
          .subscribe(u => {
            const _user = <User>u;
            this.users[_user.uid] = { ...u };
            console.log(this.users);
          });
      });
      // Gets the feed
      this.subscribers.map(data => {
        return this._afStore.collection(`Users/${data.subscriberId}/post`).valueChanges().pipe(take(1))
          .subscribe(post => {
            this.feed = [...this.feed, ...post];
            console.log(this.feed);
            this.feed.sort((a, b) => {
              return b.date - a.date;
            });
            console.log(this.feed);
          });
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
