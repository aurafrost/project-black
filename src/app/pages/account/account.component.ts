import { Component, OnInit } from '@angular/core';
import {UserService} from '../../core/services/user/user.service';
import { User } from 'src/app/core/models/User';

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user:User;
  detailsBlock:HTMLElement;
  editDetails:HTMLElement;
  constructor(
    private service:UserService,
  ) { }

  ngOnInit() {
    this.user=this.service.getUser();
  }

  edit(){
    //doubt update will work as is
    this.service.setUser(this.user.uid);
    this.ngOnInit();
  }
  showEdit(){
    this.detailsBlock=document.getElementById("details") as HTMLElement;
    this.detailsBlock.style.display="none";   
    this.editDetails=document.getElementById("editDetails") as HTMLElement;
    this.editDetails.style.display="block";
  }

  deleteAccount(){
    this.service.deleteUser(this.user.uid);
  }
}
