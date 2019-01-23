import { Component, OnInit, AfterViewInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.css'],
  animations: [
    trigger('Middle', [
      // state('begin',
      //   style({
      //     marginRight: 'auto',
      //     marginLeft: 'auto',
      //     width: '5rem',
      //     opacity: '1',
      //   })
      // ),
      state('end',
        style({
          width: '50rem',
          marginRight: 'auto',
          marginLeft: 'auto',
          opacity: '0',
          display: 'none'
        }),
      ),
      transition('begin <=> end', [
        animate('15s ease-in')
      ]),
    ]),
  ],
})

export class FootballComponent implements OnInit, AfterViewInit {
state: string ='begin'
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.state = 'end';
  }
  animateMe() {
    this.state = (this.state === 'begin' ? 'end' : 'begin');
  }
}
