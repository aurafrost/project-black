import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {Router} from '@angular/router';

@Component({
  selector: 'zb-home-slider',
  templateUrl: './zb-home-slider.component.html',
  styleUrls: ['./zb-home-slider.component.css']
})
export class ZbHomeSliderComponent implements OnInit {
  lxSm: Observable<BreakpointState> = this.breakpointObserver
    .observe(['(max-width: 599px)']);
  lxMd: Observable<BreakpointState> = this.breakpointObserver
    .observe(['(min-width: 959px)']);
  lxLg: Observable<BreakpointState> = this.breakpointObserver
    .observe(['(min-width: 1279px)']);
  title = 'socialappbeta111';
  pictures = [
    {
      id: 1,
      title: 'RobertDowneyJr',
      img: '../../../assets/png/rdj_200x200.png'
    },
    {
      id: 2,
      title: 'jay-z',
      img: '../../../assets/png/jay-z_200x200.png'
    },
    {
      id: 3,
      title: 'KanyeWest',
      img: '../../../assets/png/kanye_200x200.png'
    },
    {
      id: 4,
      title: 'TomCruise',
      img: '../../../assets/png/cruise_200x200.png'
    },
    {
      id: 5,
      title: 'Beyonce',
      img: '../../../assets/png/beyonce_200x200.png'
    },
    {
      id: 6,
      title: 'WillemDafoe',
      img: '../../../assets/png/Willem_Dafoe_200x200.png'
    },
    {
      id: 7,
      title: 'EvanderHolyfield',
      img: '../../../assets/png/holyfield_200x200.png'
    }
  ];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
