import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';



@Component({
  selector: 'nascar',
  templateUrl: './nascar.component.html',
  styleUrls: ['./nascar.component.css'],
  animations: [
    trigger('countdown', [
      state('begin',
        style({
          width: '26rem',
          height: '13rem',
          margin:'0 auto',
          position: 'absolute',
          opacity: '5'
        })
      ),
      state('end',
        style({
          width: '26rem',
          height: '13rem',
          margin:'0 auto',
          position: 'absolute',
          opacity: '0.0'
        
        }),
      ),
      transition('begin <=> end', [
        animate('5s ease-in')
      ]),
    ]),
  ]
})
export class NascarComponent implements OnInit {
state: string ='begin' 
  constructor() { }

  ngOnInit() {
  }

}
