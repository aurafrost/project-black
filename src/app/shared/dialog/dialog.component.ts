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
  
  constructor(
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
  }


}
