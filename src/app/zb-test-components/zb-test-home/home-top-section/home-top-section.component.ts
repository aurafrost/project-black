import {Component, OnInit, ViewChild} from '@angular/core';
import {IImage} from '../../../core/models/IImage';

@Component({
  selector: 'home-top-section',
  templateUrl: './home-top-section.component.html',
  styleUrls: ['./home-top-section.component.scss']
})
export class HomeTopSectionComponent implements OnInit {
  imageUrls: (string | IImage)[] = [
    {
      id: 1,
      url: 'http://a.espncdn.com/media/motion/2016/0605/evc_ACTN_20160604_X_Games__Austin__FASTCLIPPER__X_102/evc_ACTN_20160604_X_Games__Austin__FASTCLIPPER__X_102.jpg',
      title: 'Title 1',
      caption: 'The first slide',
      clickAction: () => alert('custom click function')
    },
    {
      id: 2,
      url: 'https://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/t/5bdb142c032be4a79cbbde04/1541084208729/?format=2500w',
      title: 'Title 1',
      caption: 'The second slide',
      clickAction: () => alert('custom click function')
    },
    {
      id: 3,
      url: 'https://cdn.wallpapersafari.com/70/17/3sOg9y.jpg',
      title: 'Title 1',
      caption: 'The third slide',
      clickAction: () => alert('custom click function')
    },
    {
      id: 4,
      url: 'https://atlanta-mp7static.mlsdigital.net/elfinderimages/ATL%20UTD/Wallpaper%20Downloads/2017/V4-Desktop.png',
      title: 'Title 1',
      caption: 'The fourth slide',
      clickAction: () => alert('custom click function')
    },
    {
      id: 5,
      url: 'https://atlanta-mp7static.mlsdigital.net/elfinderimages/ATL%20UTD/Wallpaper%20Downloads/2017/V4-Desktop.png',
      title: 'Title 1',
      caption: 'The fifth slide',
      clickAction: () => alert('custom click function')
    },
    {
      id: 6,
      url: 'http://images.performgroup.com/di/library/GOAL/52/3b/arthur-blank-michael-parkhurst-atlanta-united-mls-cup-2018_12mdfg1cq51km19bhfzl152t0o.jpg?t=-1860011841',
      caption: 'The sixth slide',
      clickAction: () => alert('custom click function')
    }
  ];
  constructor() { }

  ngOnInit() {
  }



}
