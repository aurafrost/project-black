import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Player } from '@angular/core/src/render3/interfaces/player';



@Component({
  selector: 'nascar',
  templateUrl: './nascar.component.html',
  styleUrls: ['./nascar.component.css']
})
export class NascarComponent implements OnInit {
state: string ='begin';
@ViewChild('page') page: ElementRef;
@ViewChild('video') video:ElementRef;
player:Player;
  constructor() { }

  ngOnInit() {
    console.log(this.player);

    setTimeout(() => {
      
      this.video.nativeElement.style.display = 'none';
      this.page.nativeElement.style.display = 'block';

    }, 9500);
  }

  someFunc(){
    
  }
  
}
