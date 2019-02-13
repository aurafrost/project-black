import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {MatDialog, MatDialogRef, MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import { Router } from '@angular/router';
import {AuthService} from '../../core/services/auth/auth.service';
import {SignInComponent} from '../dialog/sign-in/sign-in.component';

@Component({
  selector: 'header-comp',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public auth = null;
  term:string = "";
  signInDialogRef: MatDialogRef<SignInComponent>;
  isHandset: Observable<BreakpointState> = this.breakpointObserver
    .observe(['(max-width: 1000px)']);
  isMobile: Observable<BreakpointState> = this.breakpointObserver
    .observe(['(min-width: 580px)']);

  constructor(
    private breakpointObserver: BreakpointObserver,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private router: Router,
    private authService: AuthService,
    private dialog: MatDialog
  ) {
    this.matIconRegistry.addSvgIcon('account_circle',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/baseline-account_circle-24px.svg'));
    // this.auth = this.authService.getAuth().value;

    this.authService.$auth.subscribe(auth => {
      console.log('HEADER AUTH CHANGE');
      console.log(auth);
      this.auth = auth;
    });
  }

  ngOnInit() {
    console.log(this.auth);
  }

  openDialog() {
    this.signInDialogRef = this.dialog.open(SignInComponent, {
      data: {}
    });
  }

  signOut() {
    this.authService.signOut();
    this.auth = null;
  }

  applyTerm(event){
    var target = event.target as HTMLInputElement;
    this.term = target.value;
  }

  doSearch(){
    this.router.navigate(['search', {term: this.term}]);

  }
}
