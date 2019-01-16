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
  email: String;
  userFormData: FormGroup;
  user: User;

  constructor(
    private service: AuthService,
    private authService: AuthService,
    private router: Router
  ) {
    this.userFormData = this.formInit();

  }

  ngOnInit() {
    // if (this.authService.authenticated) {
    //   this.router.navigate(['home']);
    // }
  }

  formInit() {
    return new FormGroup({
      fname: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(1)
      ])),
      lname: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(1)
      ])),
      username: new FormControl('', Validators.compose([
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
    }, {
     // validators: this.passwordsMatch('password', 'confirmPassword')
    });
  }

  passwordsMatch(p1, p2) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[p1];
      const matchingControl = formGroup.controls[p2];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  register() {
    console.log(this.userFormData);

    if (this.userFormData.status === 'INVALID') {
      return;
    }
    if (this.userFormData.value.password !== this.userFormData.value.confirmPassword) {
      document.getElementById('password').classList.add('ng-invalid');
      document.getElementById('confirmPassword').classList.add('ng-invalid');
      return;
    }

    const user = new User(
      null,
      this.userFormData.value.username,
      this.userFormData.value.email,
      this.userFormData.value.fname,
      this.userFormData.value.lname
    );

    console.log(user);
    this.authService.signUp(user, this.userFormData.value.password)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    //this.ngOnInit();
  }
}
