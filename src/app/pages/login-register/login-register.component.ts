import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../core/services/auth/auth.service';
import {Router} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../core/models/User';

@Component({
  selector: 'login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {
  email:String;
  userFormData;
  ccFormData;
  user:User;
  constructor(
    private service: AuthService,
    private authService: AuthService,
    private router: Router 
  ) { }

  ngOnInit() {
    if (this.authService.authenticated) {
      this.router.navigate(['home']);
    }

    this.userFormData = new FormGroup({
      fname: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(1)
      ])),
      lname: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(1)
      ])),
      uname: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(1)
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])),
      confirmPassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ]))
    });
  }

  register(){
    console.log(this.userFormData)
    
    if(this.userFormData.status === 'INVALID')
    {
      return;
    }
    if(this.userFormData.value.password !== this.userFormData.value.confirmPassword)
    {
      document.getElementById('password').classList.add('ng-invalid');
      document.getElementById('confirmPassword').classList.add('ng-invalid');
      return;
    }

    this.user = new User(null, this.userFormData.value.uname, this.userFormData.value.fname, this.userFormData.value.lname, this.userFormData.value.email);
    console.log(this.user);
    this.ngOnInit();
  }
}
