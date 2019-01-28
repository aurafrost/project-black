import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { SwiperConfigInterface, } from 'ngx-swiper-wrapper';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {animate, state, style, transition, trigger, query, stagger} from '@angular/animations';
import {AnimationBuilder} from '@angular/animations';

@Component({
  selector: 'home-slider2',
  templateUrl: './home-slider2.component.html',
  styleUrls: ['./home-slider2.component.css'],
  animations: [
    trigger('onHover', [
      state('hover', style({
        borderRadius: '100%',
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

export class HomeSlider2Component implements OnInit {
  @Output() onCategorySelect: EventEmitter<any> = new EventEmitter<any>();
  @Input() init;
  currentCategory = 1;
  public show = true;

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
  public type = 'component';

  public disabled = false;

  public config: SwiperConfigInterface = {
    autoHeight: true,
    a11y: false,
    slidesPerView: 9,
    direction: 'horizontal',
    keyboard: true,
    mousewheel: true,
    scrollbar: true,
    autoplay: false,
    breakpoints: {
      1080: {slidesPerView: 7},
      1024: {slidesPerView: 6},
      840: {slidesPerView: 5},
      640: {slidesPerView: 4},
      540: {slidesPerView: 3},
    }
  };

  constructor(
    private _builder: AnimationBuilder,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
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
  }

  ngOnInit() {
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
  }

  onCategoryClick(category) {
    console.log(category);
    this.onCategorySelect.emit(category);
  }
}
