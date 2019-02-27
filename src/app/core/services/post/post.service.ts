import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private _afStore: AngularFirestore
  ) { }

  getLatestPost(userId) {
    return this._afStore.collection(`Users/${userId}/post`, ref => ref.limit(3)).valueChanges();
  }

  addPost(authId, post) {
    return this._afStore.doc(`Users/${authId}/post/${post.id}`).set(post);
  }

  deletePost(authId, postId) {
    return this._afStore.doc(`Users/${authId}/post/${postId}`).delete();
  }

  likePost(authId, id) {
    return 'like!';
  }
}
