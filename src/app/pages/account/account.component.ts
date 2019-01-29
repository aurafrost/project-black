import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {UserService} from '../../core/services/user/user.service';
import { User } from 'src/app/core/models/User';

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user = {
    cardNum: 1234098756786543,
    cardCVV: 111,
    cardName: 'John Doe',
    email: 'jdoe@test.com'
  };
  @ViewChild('editDetails') editBlock: ElementRef;
  @ViewChild('displayDetails') displayBlock: ElementRef;
  cardNum;
  cardCVV;
  cardName;
  email;
  constructor(
    private service:UserService,
  ) { 
    this.cardNum = this.user.cardNum;
    this.cardCVV = this.user.cardCVV;
    this.cardName = this.user.cardName;
    this.email = this.user.email;
  }

  ngOnInit() {
    //this.user=this.categories.getUser();
    this.displayBlock.nativeElement.style.display = "block";
    this.editBlock.nativeElement.style.display = "none";
  }

  edit(){
    //this currently changes the default values, but in reality should hit the db, update the table, then display the updated info
    //this.categories.setUser(this.user.uid);
    this.user.cardNum = this.cardNum;
    this.user.cardCVV = this.cardCVV;
    this.user.cardName = this.cardName;
    this.user.email = this.email;

    this.ngOnInit();
    console.log("done editing")
  }
  
  showEdit(){

    this.displayBlock.nativeElement.style.display = "none";
    this.editBlock.nativeElement.style.display = "block";

  }

  deleteAccount(){
    //this.categories.deleteUser(this.user.uid);
  }
}
