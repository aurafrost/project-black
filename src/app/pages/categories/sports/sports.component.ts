import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  title = "Sports Navigation";
  instruction = "";
  @ViewChild('header') headerBlock: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  changeInstruction(event){
    this.headerBlock.nativeElement.style.marginBottom = '0px';
    this.instruction = "Click to view the " + event.target.id + " page!";
  }

  setNormInstruction(){
    this.instruction = "";
    this.headerBlock.nativeElement.style.marginBottom = '32px';
  }

}
