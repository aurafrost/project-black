import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'zb-test-home',
  templateUrl: './zb-test-home.component.html',
  styleUrls: ['./zb-test-home.component.scss']
})
export class ZbTestHomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

}
