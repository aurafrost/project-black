import { Component, OnInit } from '@angular/core';
import {UserService} from '../../core/services/user/user.service';
import { User } from 'src/app/core/models/User';

@Component({
  selector: 'beyonce',
  templateUrl: './beyonce.component.html',
  styleUrls: ['./beyonce.component.css']
})
export class BeyonceComponent implements OnInit {
  user:User;
  profile:HTMLElement;
  editBlock:HTMLElement;
  htmlele:HTMLElement;

  constructor(private service:UserService) {
    this.user = new User(null, 'beyonce@test.com', 'Beyonce', '');
   }

  ngOnInit() {
    //this.user=this.service.getUser();
    this.profile=document.getElementById("profile") as HTMLElement;
    this.profile.style.display="flex";   
    this.editBlock=document.getElementById("editBlock") as HTMLElement;
    this.editBlock.style.display="none";

  }

  edit(){
    this.user.fname = (document.getElementById("edit-fname") as HTMLInputElement).value;
    this.user.lname = (document.getElementById("edit-lname") as HTMLInputElement).value;
    this.user.email = (document.getElementById("edit-email") as HTMLInputElement).value;
    //this.service.setUser(this.user.uid);
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
