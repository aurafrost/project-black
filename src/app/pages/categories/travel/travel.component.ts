import {AfterViewInit, Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css'],
  animations: [
    trigger('flyRight', [
      state('begin',
        style({
          position: 'absolute',
          bottom: '0',
          left: '0',
          width: '5rem',
          opacity: '1'
        })
      ),
      state('end',
        style({
          position: 'absolute',
          bottom: '100%',
          left: '100%',
          width: '20rem',
          opacity: '.2',
          display: 'none'
        }),
      ),
      transition('begin <=> end', [
        animate('5s ease-in')
      ]),
    ]),
    trigger('flyMiddle', [
      state('begin',
        style({
          marginRight: 'auto',
          marginLeft: 'auto',
          width: '5rem',
          opacity: '1'
        })
      ),
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
        animate('5s ease-in')
      ]),
    ]),
    trigger('flyLeft', [
      state('begin',
        style({
          position: 'absolute',
          bottom: '0',
          right: '0',
          width: '5rem',
          opacity: '1'
        })
      ),
      state('end',
        style({
          position: 'absolute',
          bottom: '100%',
          right: '100%',
          width: '20rem',
          opacity: '.2',
          display: 'none'
        }),
      ),
      transition('begin <=> end', [
        animate('5s ease-in')
      ]),
    ])
  ]
})
export class TravelComponent implements OnInit, AfterViewInit {
  state: string = 'begin';
  constructor(

  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.state = 'end';
  }

  animateMe() {
    this.state = (this.state === 'begin' ? 'end' : 'begin');
  }
}
