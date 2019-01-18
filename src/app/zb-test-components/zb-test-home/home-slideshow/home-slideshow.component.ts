import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {IImage} from '../../../core/models/IImage';

@Component({
  selector: 'home-slideshow',
  templateUrl: './home-slideshow.component.html',
  styleUrls: ['./home-slideshow.component.css']
})
export class HomeSlideshowComponent implements OnInit {
  currentSlide = 1;
  none = 'none';
  isHandset: Observable<BreakpointState> = this.breakpointObserver
    .observe(['(max-width: 1000px)']);
  isMinWidth: Observable<BreakpointState> = this.breakpointObserver
    .observe(['(min-width: 1200px)']);

  imageUrls: (string | IImage)[] = [
    {
      id: 1,
      url: 'http://a.espncdn.com/media/motion/2016/0605/evc_ACTN_20160604_X_Games__Austin__FASTCLIPPER__X_102/evc_ACTN_20160604_X_Games__Austin__FASTCLIPPER__X_102.jpg',
      title: 'Title 1',
      caption: 'The first slide',
      clickAction: () => {
        // TODO: Add animation
      }
    },
    {
      id: 2,
      url: 'https://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/t/5bdb142c032be4a79cbbde04/1541084208729/?format=2500w',
      title: 'Title 1',
      caption: 'The second slide',
      clickAction: () => {
        // TODO: Add animation
      }
    },
    {
      id: 3,
      url: 'https://cdn.wallpapersafari.com/70/17/3sOg9y.jpg',
      title: 'Title 1',
      caption: 'The third slide',
      clickAction: () => {
        // TODO: Add animation
      }
    },
    {
      id: 4,
      url: 'https://atlanta-mp7static.mlsdigital.net/elfinderimages/ATL%20UTD/Wallpaper%20Downloads/2017/V4-Desktop.png',
      title: 'Title 1',
      caption: 'The fourth slide',
      clickAction: () => {
        // TODO: Add animation
      }
    },
    {
      id: 5,
      url: 'https://atlanta-mp7static.mlsdigital.net/elfinderimages/ATL%20UTD/Wallpaper%20Downloads/2017/V4-Desktop.png',
      title: 'Title 1',
      caption: 'The fifth slide',
      clickAction: () => {
        // TODO: Add animation
      }
    },
    {
      id: 6,
      url: 'http://images.performgroup.com/di/library/GOAL/52/3b/arthur-blank-michael-parkhurst-atlanta-united-mls-cup-2018_12mdfg1cq51km19bhfzl152t0o.jpg?t=-1860011841',
      caption: 'The sixth slide',
      clickAction: () => {
        // TODO: Add animation
      }
    }
  ];
  constructor(
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit() {
  }
}
