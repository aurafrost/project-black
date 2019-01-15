import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
  formData;
  supportRequest;
  constructor() { }

  ngOnInit() {
    this.formData = new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.required
      ])),
      message: new FormControl('', Validators.compose([
        Validators.required
      ]))
    })
  }

  postSupport() {
    this.supportRequest = this.formData.value;
    this.ngOnInit();
  }

}
