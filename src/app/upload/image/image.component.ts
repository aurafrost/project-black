import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  title = 'Sample Images to Database';
  description = 'Angular-Firebase Demo';

  constructor() { }

  ngOnInit() {
  }

}
