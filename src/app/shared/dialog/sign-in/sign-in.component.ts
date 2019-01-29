import {Component, Inject, OnInit, ViewChild, ElementRef } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {AuthService} from '../../../core/services/auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public email = '';
  public emailTest = "";
  public password = '';
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    console.log(this.email)
    
    this.authService.signIn(this.email, this.password)
      .then(res => {
        
        this.router.navigate(['']);

      })
      .catch(err => console.log(err.message));
  }
}
