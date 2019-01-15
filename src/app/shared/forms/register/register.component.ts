import { Component, OnInit } from '@angular/core';
import {User} from '../../../core/models/User';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../core/services/user/user.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private user = new User();
  private formData: FormGroup;
  constructor(
    private userService: UserService
  ) {
    this.formData = this.formInit();
  }

  ngOnInit() {
  }

  formInit() {
    return new FormGroup({
      email: new FormControl("", Validators.compose([
        Validators.required
      ])),
      type: new FormControl("", Validators.compose([
        Validators.required
      ])),
      fname: new FormControl("", Validators.compose([
        Validators.required
      ])),
      lname: new FormControl("", Validators.compose([
        Validators.required
      ])),
      phone: new FormControl("", Validators.compose([
        Validators.required
      ])),
      address: new FormControl("", Validators.compose([
        Validators.required
      ])),
      policyNo: new FormControl("", Validators.compose([
        Validators.required
      ]))
    });
  }

  addUser(user) {
    this.userService.createUser(user)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
}
