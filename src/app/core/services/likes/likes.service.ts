import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {post} from 'selenium-webdriver/http';
import {take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LikesService {
  public auth = null;
  public likes = new BehaviorSubject<any>(null);
  $likes = this.likes.asObservable();
  constructor(
    private _afStore: AngularFirestore
  ) { }

  setLikes(auth) {
    this._afStore.collection(`Users/${auth.uid}/likes`).valueChanges()
      .subscribe(likes => {
        if (this.likes.next && likes.length > 0) {
          this.likes.next(likes);
        }
      });
  }

  getLikes() {
    return this.likes;
  }

  checkIfLiked(authId, postId) {
    return this._afStore.doc(`Users/${authId}/likes/${postId}`).snapshotChanges();
  }

  addLike(authId, postId) {
    this._afStore.doc(`Users/${authId}/likes/${postId}`).set({
      postId: postId
    });
  }

  removeLike(authId, postId) {
    this._afStore.doc(`Users/${authId}/likes/${postId}`).delete();
  }

  getLikeCount(userId, postId) {
    return this._afStore.doc(`Users/${userId}/post/${postId}`).valueChanges().pipe(take(1));
  }

  incrementLikeCount(userId, postId) {
    const postRef = this._afStore.doc(`Users/${userId}/post/${postId}`);
    this._afStore.firestore.runTransaction(t => {
      return t.get(postRef.ref).then(doc => {
        console.log(doc.data().likeCount);
        if (doc.data().likeCount) {
          const newCount = doc.data().likeCount + 1;
          return t.update(postRef.ref, {
            likeCount: newCount
          });
        } else {
          return t.update(postRef.ref, {
            likeCount: 1
          });
        }
      }).then(res => console.log(res)).catch(err => console.log(err));
    });
  }

  deincrementLikeCount(userId, postId) {
    const postRef = this._afStore.doc(`Users/${userId}/post/${postId}`);
    this._afStore.firestore.runTransaction(t => {
      return t.get(postRef.ref)
        .then(doc => {
          console.log(doc.data().likeCount);
          if (doc.data().likeCount) {
            const newCount = doc.data().likeCount - 1;
            t.update(postRef.ref, {
              likeCount: newCount
            });
          } else {
            t.update(postRef.ref, {
              likeCount: 0
            });
          }
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    });
  }
}
