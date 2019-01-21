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
  isMobile: Observable<BreakpointState> = this.breakpointObserver
    .observe(['(min-width: 580px)']);
  // public categories = {
   public business = [
      {index: 1, title: '', img: 'assets/png/avatar.png'},
      {index: 2, title: '', img: 'assets/png/avatar.png'},
      {index: 3, title: '', img: 'assets/png/avatar.png'},
      {index: 4, title: '', img: 'assets/png/avatar.png'},
      {index: 5, title: '', img: 'assets/png/avatar.png'},
    ];
    sports = [
      {index: 1, title: '', img: 'assets/png/avatar.png'},
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
  public show: boolean = true;

  public mobileConfig: SwiperConfigInterface = {
    pagination: true,
    threshold: 50,
    spaceBetween: 5,
    centeredSlides: true,
    speed: 3000,
    autoplay: false,
    slidesPerView: 1,
    preventClicks: false,
  };

  public handsetConfig: SwiperConfigInterface = {
    pagination: true,
    threshold: 50,
    spaceBetween: 5,
    centeredSlides: true,
    speed: 3000,
    autoplay: false,
    slidesPerView: 1,
    preventClicks: false,
    // effect: 'slide', // cube, flip, fade,
    // coverflowEffect: 'coverflow'
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
