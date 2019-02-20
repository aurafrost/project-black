import {Component, OnInit, ViewEncapsulation, AfterContentChecked} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentChecked {
  homepage = false;
  constructor(private router: Router ) { }

  ngAfterContentChecked() {
    this.homepage = this.router.url === '/' ? false : true;
  }
}
