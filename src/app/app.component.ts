import {Component, OnInit, ViewEncapsulation, AfterViewChecked} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {
  homepage = false;
  constructor(private router: Router ) { 
  }

  ngAfterViewChecked() {
    this.homepage = this.router.url === '/' ? false : true;
  }
}
