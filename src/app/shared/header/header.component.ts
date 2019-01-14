import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isMobile: Observable<BreakpointState> = this.breakpointObserver
    .observe(Breakpoints.Handset);

  constructor(
    private breakpointObserver: BreakpointObserver,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon('account_circle',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/baseline-account_circle-24px.svg'));
  }

  ngOnInit() {
  }

}
