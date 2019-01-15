import { Component, OnInit } from '@angular/core';
import {UserService} from '../../core/services/user/user.service';
import { User } from 'src/app/core/models/User';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:User;
  profile:HTMLElement;
  editBlock:HTMLElement;

  constructor(private service:UserService) { }

  ngOnInit() {
    this.user=this.service.getUser();
  }

  edit(){
    //doubt update will work as is
    this.service.setUser(this.user.uid);
    this.ngOnInit();
  }
  showEdit(){
    this.profile=document.getElementById("profile") as HTMLElement;
    this.profile.style.display="none";   
    this.editBlock=document.getElementById("editBlock") as HTMLElement;
    this.editBlock.style.display="block";
  }
}
