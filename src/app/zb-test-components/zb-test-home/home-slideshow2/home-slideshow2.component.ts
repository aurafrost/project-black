import { Component, OnInit } from '@angular/core';
import {animate, AnimationBuilder, query, stagger, state, style, transition, trigger} from '@angular/animations';
import {Observable} from 'rxjs';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import { SwiperConfigInterface, SwiperCoverflowEffectInterface} from 'ngx-swiper-wrapper';


@Component({
  selector: 'home-slideshow2',
  templateUrl: './home-slideshow2.component.html',
  styleUrls: ['./home-slideshow2.component.css'],
  animations: [
    trigger('onHover', [
      state('hover', style({
        borderRadius: '5rem',
        border: '3px solid #DA4453',
        boxShadow: 'inset 0 0 10px #000000',
        transform: 'rotate(360deg)'
      })),
      state('unhover', style({
        borderRadius: '5px',
        border: '3px solid #DA4453',
        boxShadow: 'inset 0 0 10px #000000',
      })),
      transition('hover => unhover', [
        animate('.3s')
      ]),
      transition('unhover => hover', [
        animate('.3s')
      ])
    ]),
    trigger('onSwipe', [
      transition('* => *', [
        query(':enter', style({ transform: 'rotateY(-360deg)' })),
        query(':enter', stagger('.1s', [
          animate('1s')
        ]))
      ])
    ])
  ]
})
export class HomeSlideshow2Component implements OnInit {
  show = true;
  isHandset: Observable<BreakpointState> = this.breakpointObserver
    .observe(['(max-width: 1000px)']);
  isMobile: Observable<BreakpointState> = this.breakpointObserver
    .observe(['(min-width: 580px)']);
  // public categories = {
  public business = [
    {index: 1, title: '', img: 'http://a.espncdn.com/media/motion/2016/0605/evc_ACTN_20160604_X_Games__Austin__FASTCLIPPER__X_102/evc_ACTN_20160604_X_Games__Austin__FASTCLIPPER__X_102.jpg'},
    {index: 2, title: '', img: 'https://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/t/5bdb142c032be4a79cbbde04/1541084208729/?format=2500w'},
    {index: 3, title: '', img: 'https://cdn.wallpapersafari.com/70/17/3sOg9y.jpg'},
    {index: 4, title: '', img: 'https://atlanta-mp7static.mlsdigital.net/elfinderimages/ATL%20UTD/Wallpaper%20Downloads/2017/V4-Desktop.png'},
    {index: 5, title: '', img: 'https://atlanta-mp7static.mlsdigital.net/elfinderimages/ATL%20UTD/Wallpaper%20Downloads/2017/V4-Desktop.png'},
    {index: 1, title: '', img: 'http://images.performgroup.com/di/library/GOAL/52/3b/arthur-blank-michael-parkhurst-atlanta-united-mls-cup-2018_12mdfg1cq51km19bhfzl152t0o.jpg?t=-1860011841'},
  ];
  sports = [
    {index: 1, title: '', img: 'http://images.performgroup.com/di/library/GOAL/52/3b/arthur-blank-michael-parkhurst-atlanta-united-mls-cup-2018_12mdfg1cq51km19bhfzl152t0o.jpg?t=-1860011841'},
    {index: 2, title: '', img: 'assets/png/avatar.png'},
    {index: 3, title: '', img: 'assets/png/avatar.png'},
    {index: 4, title: '', img: 'assets/png/avatar.png'},
    {index: 5, title: '', img: 'assets/png/avatar.png'},
  ];
  travel = [
    {index: 1, title: '', img: 'assets/png/avatar.png'},
    {index: 2, title: '', img: 'assets/png/avatar.png'},
    {index: 3, title: '', img: 'assets/png/avatar.png'},
    {index: 4, title: '', img: 'assets/png/avatar.png'},
    {index: 5, title: '', img: 'assets/png/avatar.png'},
  ];
  // };
  public type: string = 'component';
  public disabled: boolean = false;

  public  swiperCoverflowEffect: SwiperCoverflowEffectInterface = {
    depth: 100,
    rotate: 50,
    stretch: 0,
    modifier: 1,
    slideShadows: true
  };

  public config: SwiperConfigInterface = {
    autoHeight: true,
    pagination: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: this.swiperCoverflowEffect,
    effect: 'coverflow',
    breakpoints: {
      // 1080: {
      //   slidesPerView: 7
      // },
      // 1024: {
      //   slidesPerView: 6,
      //   // spaceBetween: 40,
      // },
      // 840: {
      //   slidesPerView: 5,
      //   // spaceBetween: 30,
      // },
      // 640: {
      //   slidesPerView: 4,
      //   // spaceBetween: 20,
      // },
      // 540: {
      //   slidesPerView: 3
      // },
      // 420: {
      //   slidesPerView: 2,
      //   // spaceBetween: 10,
      // }
    }
  };

  constructor(
    private _builder: AnimationBuilder,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit() {
  }

  public onIndexChange(index: number): void {
    console.log('Swiper index: ', index);
  }

  public onSwiperEvent(event: string): void {
    console.log('Swiper event: ', event);
  }

}
