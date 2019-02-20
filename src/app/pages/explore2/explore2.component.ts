import {AfterContentInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MediaChange, MediaObserver} from '@angular/flex-layout';
import {Subscription} from 'rxjs';
import {UserService} from '../../core/services/user/user.service';
import {animate, query, stagger, state, style, transition, trigger} from '@angular/animations';
import {SubscribeService} from '../../core/services/subscribe/subscribe.service';
import {AuthService} from '../../core/services/auth/auth.service';
import {ProductService} from '../../core/services/product/product.service';

@Component({
  selector: 'explore2',
  templateUrl: './explore2.component.html',
  styleUrls: ['./explore2.component.css'],
  animations: [
    trigger('cardZoom', [
      state('end', style({
        zIndex: '1',
        width: '100%',
        height: '100%',
        bottom: '0px',
        top: '0px',
        left: '0',
        position: 'fixed',
        opacity: '1',
        display: 'block'
      })),
      state('initial', style({
      })),
      transition('initial <=> end', [
        animate('.3s')
      ]),
    ])
  ],
})
export class Explore2Component implements OnInit, AfterContentInit, OnDestroy {
  auth: any;
  subscriptions: any[];
  currentState = 'initial';
  watcher: Subscription;
  activeMediaQuery = '';
  currentIndex = '';
  item: any;
  categoryList = null;
  cardFillIndex = '';
  cols = 8;
  selected = '';
  data = [];
  categories = [
    {value: 'sports', viewValue: 'Sports'},
    {value: 'film', viewValue: 'Film'},
    {value: 'music', viewValue: 'Music'},
  ];

  constructor(
    private _authService: AuthService,
    private _subscribeService: SubscribeService,
    private _userService: UserService,
    private _mediaObserver: MediaObserver,
    private _productService: ProductService
  ) {
    // this.auth = this._authService.getAuth().value;
    // console.log(this.auth);
    // this._subscribeService.setSubscriptions(this.auth);

    this._subscribeService.$subscribers.subscribe(data => {
      console.log(data);
      this.subscriptions = data;
    });

    this.watcher = _mediaObserver.media$.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
      console.log(change.mediaQuery);
      if ( change.mqAlias === 'xs') {
        this.cols = 1;
      } else if ( change.mqAlias === 'sm') {
        this.cols = 2;
      } else if (change.mqAlias === 'md') {
        this.cols = 4;
      } else if ( change.mqAlias === 'lg') {
        this.cols = 6;
      } else if ( change.mqAlias === 'xl') {
        this.cols = 8;
      }
    });
  }

  ngOnInit() {

  }

  ngAfterContentInit() {

  }

  containsId = (id): boolean => {
    return this.subscriptions.some(function(i) { return i.subscriberId === id; });
  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }

  changeCategory() {
    this._userService.getUsersByCategory(this.selected)
      .subscribe(data => {
        this.data = data;
        console.log(data);
      });
  }

  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

  onClick(item, uid) {
    event.preventDefault();
    event.stopPropagation();
    console.log(item);
    if (this.cardFillIndex === uid) {
      document.getElementById('page').style.overflowY = 'auto';
      this.cardFillIndex = null;
      this.item = item;
    } else  {
      document.getElementById('page').style.overflowY = 'hidden';
      this.cardFillIndex = uid;
      this.item = item;
    }
    document.getElementById('page').style.overflowY = 'auto';
    console.log(this.cardFillIndex);
  }

  getCategory(category, item) {
    console.log(item);
    switch (category) {
      case 'post':
        return null;
      case 'news':
        return null;
      case 'product':
        return this._productService.getLatestProducts(item.uid).subscribe(data => {
          console.log(data);
          this.categoryList = data;
        });
      case 'event':
        return null;
      default:
        return null;
    }
  }
}
