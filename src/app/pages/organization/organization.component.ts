import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/core/services/image/image.service';

@Component({
  selector: 'organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {
  temp:HTMLElement;
  topic:string;
  constructor(private service:ImageService) { 
  }

  ngOnInit() {
    //check topic
    console.log(this.service.getTopic());
    this.topic=this.service.getTopic();

    //get image doc
    this.service.getImage(this.topic).subscribe(data=>{
      //set image
      this.temp=document.getElementById('i1');
      this.temp.setAttribute('src',data.image);
      //set href
      this.temp=document.getElementById('h1');
      this.temp.setAttribute('href',data.href);
      //set text
      this.temp=document.getElementById('t1');
      this.temp.innerText=data.text;
    });
  }
  subscribe(name){

  }
  tabby(evt, name) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " active";
  }
}
