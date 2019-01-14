import {Component, Inject, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {User} from '../../core/models/User';
import {MAT_DIALOG_DATA} from '@angular/material';
import {UserService} from '../../core/services/user/user.service';

@Component({
  selector: 'dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  private user = new User();
  private formData: FormGroup;
  constructor(
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

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
    this.httpUser.postUser(user)
      .subscribe(data => {
        console.log(data);
        alert('User Added!');
      });
  }
}
