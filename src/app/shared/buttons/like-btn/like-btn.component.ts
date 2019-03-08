import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../core/services/auth/auth.service';
import {LikesService} from '../../../core/services/likes/likes.service';
import {Post} from '../../../core/models/Post';

@Component({
  selector: 'like-btn',
  templateUrl: './like-btn.component.html',
  styleUrls: ['./like-btn.component.css']
})
export class LikeBtnComponent implements OnInit {
  @Input('postId') postId;
  @Input('userId') userId;
  auth = null;
  isLiked: boolean;
  likeCount = null;

  constructor(
    private _router: Router,
    private _authService: AuthService,
    private _likeService: LikesService
  ) { }

  ngOnInit() {
    this.auth = this._authService.getAuth().value;
    this._likeService.checkIfLiked(this.auth.uid, this.postId)
      .subscribe(item => {
        this.isLiked = item.payload.exists;
      });
    this._likeService.getLikeCount(this.userId, this.postId)
      .subscribe(data => {
        const p = <Post> data;
        if (p && p.likeCount) {
          this.likeCount = p.likeCount;
        } else {
          this.likeCount = 0;
        }
      });
  }

  toggleLike() {
    if (this.isLiked) {
      this._likeService.removeLike(this.auth.uid, this.postId);
      this._likeService.deincrementLikeCount(this.userId, this.postId);
      this.likeCount -= 1;
    } else {
      this._likeService.addLike(this.auth.uid, this.postId);
      this._likeService.incrementLikeCount(this.userId, this.postId);
      this.likeCount += 1;
    }
    this.isLiked = !this.isLiked;
  }
}
