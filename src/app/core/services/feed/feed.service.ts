import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthService} from '../auth/auth.service';
import {SubscribeService} from '../subscribe/subscribe.service';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  constructor(
    private _authService: AuthService,
    private _afStore: AngularFirestore,
    private _subscriberService: SubscribeService
  ) {}
}
