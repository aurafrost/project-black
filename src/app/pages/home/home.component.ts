import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  none = 'none';
  isHandset: Observable<BreakpointState> = this.breakpointObserver
    .observe(['(max-width: 1000px)']);
  isMinWidth: Observable<BreakpointState> = this.breakpointObserver
    .observe(['(min-width: 1200px)']);

  title = 'socialappbeta111';
  pictures = [
    {
      id: 1,
      title: 'A natural view',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg'
    },
    {
      id: 2,
      title: 'Newspaper',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/LTLE4QGRVQ.jpg'
    },
    {
      id: 3,
      title: 'Favourite pizza',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/R926LU1YEA.jpg'
    },
    {
      id: 4,
      title: 'Abstract design',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/U9PP3KXXY2.jpg'
    },
    {
      id: 5,
      title: 'Tech',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/NO9CN3QYR3.jpg'
    },
    {
      id: 6,
      title: 'Nightlife',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/X1UK6NLGRU.jpg'
    },
  ];

  imageArr = [
    'http://a.espncdn.com/media/motion/2016/0605/evc_ACTN_20160604_X_Games__Austin__FASTCLIPPER__X_102/evc_ACTN_20160604_X_Games__Austin__FASTCLIPPER__X_102.jpg',
    'https://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/t/5bdb142c032be4a79cbbde04/1541084208729/?format=2500w',
    'https://cdn.wallpapersafari.com/70/17/3sOg9y.jpg',
    'https://atlanta-mp7static.mlsdigital.net/elfinderimages/ATL%20UTD/Wallpaper%20Downloads/2017/V4-Desktop.png',
    'http://images.performgroup.com/di/library/GOAL/52/3b/arthur-blank-michael-parkhurst-atlanta-united-mls-cup-2018_12mdfg1cq51km19bhfzl152t0o.jpg?t=-1860011841',
  ];

  constructor(
    private breakpointObserver: BreakpointObserver
  ) { }
  ngOnInit() {
  }

}
