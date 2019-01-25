import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  title = "Sports";


  constructor() { }

  ngOnInit() {
  }

  changeTitle(event){
    this.title = event.target.id;
  }

  setNormTitle(){
    this.title = "Sports";
  }

}
