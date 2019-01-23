import { Component, OnInit } from '@angular/core';
import {UserService} from '../../core/services/user/user.service';
import { User } from 'src/app/core/models/User';

@Component({
  selector: 'tomcruise',
  templateUrl: './tomcruise.component.html',
  styleUrls: ['./tomcruise.component.css']
})
export class TomcruiseComponent implements OnInit {
  user:User;
  profile:HTMLElement;
  editBlock:HTMLElement;
  htmlele:HTMLElement;

  constructor(private service:UserService) {
    this.user = new User(null, 'tomcruise@test.com', 'Tom', 'Cruise');
   }

  ngOnInit() {
    //this.user=this.categories.getUser();
    this.profile=document.getElementById("profile") as HTMLElement;
    this.profile.style.display="flex";   
    this.editBlock=document.getElementById("editBlock") as HTMLElement;
    this.editBlock.style.display="none";

  }

  edit(){
    this.user.fname = (document.getElementById("edit-fname") as HTMLInputElement).value;
    this.user.lname = (document.getElementById("edit-lname") as HTMLInputElement).value;
    this.user.email = (document.getElementById("edit-email") as HTMLInputElement).value;
    //this.categories.setUser(this.user.uid);
    this.ngOnInit();
  }

  showEdit(){
    this.profile=document.getElementById("profile") as HTMLElement;
    this.profile.style.display="none";   
    this.editBlock=document.getElementById("editBlock") as HTMLElement;
    this.editBlock.style.display="block";
  }

  deletePost(id){
    var r = confirm("Delete post?");
    if (r == true) {
      this.htmlele=document.getElementById(id) as HTMLElement;
      this.htmlele.parentNode.removeChild(this.htmlele);
    }    
  }
}
