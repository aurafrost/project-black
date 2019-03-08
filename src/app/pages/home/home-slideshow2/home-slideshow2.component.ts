import { Component, OnInit, Input } from '@angular/core';
import {animate, AnimationBuilder, query, stagger, state, style, transition, trigger} from '@angular/animations';
import { SwiperConfigInterface, SwiperCoverflowEffectInterface} from 'ngx-swiper-wrapper';
import {Observable} from 'rxjs';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';


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
  @Input('data') data = [];
  public type = 'component';
  public disabled = false;
  swiper = {};
  // public features: any = [];
  headerFlip: Observable<BreakpointState> = this.breakpointObserver
    .observe(['(min-width: 991px)']);


  public  swiperCoverflowEffect: SwiperCoverflowEffectInterface = {
    depth: 100,
    rotate: 50,
    stretch: 0,
    modifier: 1,
    slideShadows: true
  };

  public config: SwiperConfigInterface = {
    mousewheel: true,
    scrollbar: true,
    autoHeight: true,
    autoplay: true,
    pagination: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: this.swiperCoverflowEffect,
    effect: 'coverflow',
    speed: 2000,
    observer: true
  };

  constructor(
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit() {
    console.log(this.data);
  }

  public onIndexChange(index: number): void {
    console.log('Swiper index: ', index);
  }

  public onSwiperEvent(event: string): void {
    console.log('Swiper event: ', event);
  }

  log(val) {
    console.log(val);
  }

  public update() {

  }
}
