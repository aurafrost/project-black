import { Component, OnInit } from '@angular/core';
import {animate, AnimationBuilder, query, stagger, state, style, transition, trigger} from '@angular/animations';
import {Observable} from 'rxjs';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

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
  isMobile: Observable<BreakpointState> = this.breakpointObserver
    .observe(['(min-width: 580px)']);
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
  ) { }

  ngOnInit() {
  }

  public onIndexChange(index: number): void {
    console.log('Swiper index: ', index);
  }

  public onSwiperEvent(event: string): void {
    console.log('Swiper event: ', event);
    // this.makeAnimation(this.swiperRef.nativeElement);
  }

}
