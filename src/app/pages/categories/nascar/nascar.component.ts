import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Player } from '@angular/core/src/render3/interfaces/player';



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
state: string ='begin';
@ViewChild('gif') gif: ElementRef;
@ViewChild('video') video:ElementRef;
player:Player;
  constructor() { }

  ngOnInit() {
    console.log(this.player);

    setTimeout(() => {
      this.gif.nativeElement.style.display = 'none';
      this.video.nativeElement.autoplay = 1;
    }, 9000);
  }

  someFunc(){
    
  }
  
}
