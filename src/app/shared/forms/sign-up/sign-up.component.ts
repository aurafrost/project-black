import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../core/models/User';
import {AuthService} from '../../../core/services/auth/auth.service';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  private user = new User();
  public formData: FormGroup;

  constructor(
    private authService: AuthService
  ) {
    this.formData = this.formInit();
  }

  ngOnInit() {
  }

  formInit() {
    return new FormGroup({
      username: new FormControl('', Validators.compose([
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required
      ])),
      fname: new FormControl('', Validators.compose([
        Validators.required
      ])),
      lname: new FormControl('', Validators.compose([
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required
      ])),
      confirmPassword: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }

  signUp() {
    const user = new User(
      null,
        this.formData.value.username,
        this.formData.value.email,
        this.formData.value.fname,
        this.formData.value.lname
    );
    console.log(user);
    this.authService.signUp(user, this.formData.value.password)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
}
