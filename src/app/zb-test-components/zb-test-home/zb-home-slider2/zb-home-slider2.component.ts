import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface, SwiperFadeEffectInterface, SwiperCubeEffectInterface } from 'ngx-swiper-wrapper';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {Observable} from 'rxjs';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {animate, state, style, transition, trigger, query, stagger, keyframes, AnimationFactory} from '@angular/animations';
import {AnimationBuilder} from '@angular/animations';

@Component({
  selector: 'zb-home-slider2',
  templateUrl: './zb-home-slider2.component.html',
  styleUrls: ['./zb-home-slider2.component.css'],
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
// state('default', style({ transform: 'rotate(0)' })),
//   state('rotated', style({ transform: 'rotate(-360deg)' })),
//   transition('rotated => default', animate('400ms ease-out')),
//   transition('default => rotated', animate('400ms ease-in'))
export class ZbHomeSlider2Component implements OnInit {
  @ViewChild('swiper') swiperRef: ElementRef;
  private closeAnimation: AnimationFactory;
  private openAnimation: AnimationFactory;
  isHover = false;
  currentCategory = 1;
  isHandset: Observable<BreakpointState> = this.breakpointObserver
    .observe(['(max-width: 1000px)']);
  isMobile: Observable<BreakpointState> = this.breakpointObserver
    .observe(['(min-width: 580px)']);

  public show: boolean = true;

  public slides = [
    {index: 1, title: 'Business', svg: 'business'},
    {index: 2, title: 'Sports', svg: 'sports'},
    {index: 3, title: 'Travel', svg: 'travel'},
    {index: 4, title: 'Education', svg: 'education'},
    {index: 5, title: 'Food', svg: 'food'},
    {index: 6, title: 'Living', svg: 'living'},
    {index: 7, title: 'News', svg: 'news'},
    {index: 8, title: 'Music', svg: 'music'},
    {index: 9, title: 'Movies', svg: 'movies'}
  ];
  public type: string = 'component';

  public disabled: boolean = false;

  public mobileConfig: SwiperConfigInterface = {
    a11y: false,
    direction: 'horizontal',
    slidesPerView: 3,
    keyboard: true,
    mousewheel: true,
    scrollbar: true,
    navigation: true,
    pagination: true,
    autoplay: false,
  };

  public handsetConfig: SwiperConfigInterface = {
    a11y: false,
    direction: 'horizontal',
    slidesPerView: 5,
    keyboard: true,
    mousewheel: true,
    scrollbar: true,
    navigation: true,
    pagination: true,
    autoplay: false,
  };

  constructor(
    private _builder: AnimationBuilder,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private breakpointObserver: BreakpointObserver
  ) {
    this.matIconRegistry.addSvgIcon('business', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/category_icons/business.svg'));
    this.matIconRegistry.addSvgIcon('sports', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/category_icons/sports.svg'));
    this.matIconRegistry.addSvgIcon('travel', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/category_icons/travel.svg'));
    this.matIconRegistry.addSvgIcon('education', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/category_icons/education.svg'));
    this.matIconRegistry.addSvgIcon('food', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/category_icons/food.svg'));
    this.matIconRegistry.addSvgIcon('living', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/category_icons/living.svg'));
    this.matIconRegistry.addSvgIcon('news', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/category_icons/news.svg'));
    this.matIconRegistry.addSvgIcon('music', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/category_icons/music.svg'));
    this.matIconRegistry.addSvgIcon('movies', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/category_icons/movies.svg'));
    this.openAnimation = this._builder.build([
      style({ transform: 'rotateY(-360deg)' }),
      animate('1s')
    ]);
  }

  ngOnInit() {
  }

  makeAnimation(element: any) {
    const myAnimation = this._builder.build([
      style({ transform: 'rotateY(-360deg)' }),
      animate('1s')
    ]);
    myAnimation.create(element).play();
  }

  public hover(e) {
    console.log(e);
    this.currentCategory = e.index;
  }

  public unHover() {
    this.currentCategory = null;
  }

  public onIndexChange(index: number): void {
    console.log('Swiper index: ', index);
  }

  public onSwiperEvent(event: string): void {
    console.log('Swiper event: ', event);
    this.makeAnimation(this.swiperRef.nativeElement);
  }

  // public toggleDirection(): void {
  //   this.config.direction = (this.config.direction === 'horizontal') ? 'vertical' : 'horizontal';
  // }
  //
  // public toggleSlidesPerView(): void {
  //   if (this.config.slidesPerView !== 1) {
  //     this.config.slidesPerView = 1;
  //   } else {
  //     this.config.slidesPerView = 2;
  //   }
  // }
  //
  // public toggleKeyboardControl(): void {
  //   this.config.keyboard = !this.config.keyboard;
  // }
  //
  // public toggleMouseWheelControl(): void {
  //   this.config.mousewheel = !this.config.mousewheel;
  // }
}
