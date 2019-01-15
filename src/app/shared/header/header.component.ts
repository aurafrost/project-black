import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isHandset: Observable<BreakpointState> = this.breakpointObserver
    .observe(['(max-width: 960px)']);
  isMobile: Observable<BreakpointState> = this.breakpointObserver
    .observe(['(min-width: 500px)']);

  constructor(
    private breakpointObserver: BreakpointObserver,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private router: Router
  ) {
    this.matIconRegistry.addSvgIcon('account_circle',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/baseline-account_circle-24px.svg'));
  }

  ngOnInit() {
  }
}
