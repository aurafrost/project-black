import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  htmlele:HTMLElement;
  constructor() { }

  ngOnInit() {
  }

  hide(id){
    this.htmlele=document.getElementById(id) as HTMLElement;
    this.htmlele.parentNode.removeChild(this.htmlele);
  }
}
