import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {UserService} from '../../core/services/user/user.service';
import { User } from 'src/app/core/models/User';
import {AuthService} from '../../core/services/auth/auth.service';


@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  uid=JSON.parse(localStorage.getItem('auth')).uid;
  firebaseUser=<User>this.service.getUserById(this.uid).subscribe(data=>{
    
  });
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
    private _authService: AuthService,
  ) { 
    this.cardNum = this.user.cardNum;
    this.cardCVV = this.user.cardCVV;
    // this.cardName = this.user.cardName;
    // this.email = this.user.email;
    this.service.getUser(this.uid).subscribe(data=>{
      // this.cardNum=data.cardNum;
      // this.cardCVV=data.cardCVV;
      this.cardName=data.fname+" "+data.lname;
      this.email=data.email;
    });
  }

  ngOnInit() {
    //this.user=this.categories.getUser();
    this.displayBlock.nativeElement.style.display = "block";
    this.editBlock.nativeElement.style.display = "none";
    console.log(JSON.parse(localStorage.getItem('auth')))
  }

  edit(){
    //this currently changes the default values, but in reality should hit the db, update the table, then display the updated info
    //this.categories.setUser(this.user.uid);
    this.user.cardNum = this.cardNum;
    this.user.cardCVV = this.cardCVV;
    this.user.cardName = this.cardName;
    this.user.email = this.email;

    this.service.alterUser(this.cardNum,this.cardCVV,this.cardName,this.email);
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
