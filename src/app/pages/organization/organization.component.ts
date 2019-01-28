import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/core/services/image/image.service';
import { getNativeByIndex } from '@angular/core/src/render3/util';
import { Router } from '@angular/router';

@Component({
  selector: 'organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {
  temp: HTMLElement;
  topic: string;
  constructor(private service: ImageService, private router: Router) {
  }

  ngOnInit() {
    //check topic
    console.log(this.service.getTopic());
    this.topic = this.service.getTopic();
    if(this.topic==null){
      this.router.navigate(['/']);
    }
    this.getBaseElements();

    //nav elements
    this.getElements(1);
    this.getElements(2);
    this.getElements(3);
    this.getElements(4);
    this.getElements(5);
  }

  getBaseElements() {
    //get image doc
    this.service.getImage(this.topic).subscribe(data => {
      //base elements
      //set title
      this.temp = document.getElementById('title');
      this.temp.innerText = data.title;
      //set background
      this.temp = document.getElementById('page');
      this.temp.style.height = "1000px";
      this.temp.style.backgroundImage = "url(" + data.bg + ")";
      this.temp.style.backgroundRepeat = "repeat";
      //set video
      this.temp = document.getElementById('videoframe');
      this.temp.setAttribute('src', data.video);
      // //set fb
      // this.temp = document.getElementById('fb');
      // this.temp.setAttribute('data-href', data.facebook);
      // //set twitter
      // this.temp = document.getElementById('twitter');
      // this.temp.setAttribute('href', data.twitter);
    });
  }

  getElements(id) {
    this.service.getImagePath(this.topic, "nav/nav" + id).subscribe(data => {
      //set image
      this.temp = document.getElementById('i' + id);
      this.temp.setAttribute('src', data.image);
      //set href
      this.temp = document.getElementById('h' + id);
      this.temp.setAttribute('href', data.href);
      //set text
      this.temp = document.getElementById('t' + id);
      this.temp.innerText = data.text;
    });
  }

  subscribe(name) {

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
    //check if null to avoid error msgs
    if(evt){
      evt.currentTarget.className += " active";
    }

    //load apis?
    this.service.getImage(this.topic).subscribe(data => {
      //set fb
      this.temp = document.getElementById('fb');
      this.temp.setAttribute('data-href', data.facebook);
      //set twitter
      this.temp = document.getElementById('twitter');
      this.temp.setAttribute('href', data.twitter);
    })
  }

  ngOnDestroy() {
    this.temp = document.getElementById('page');
    this.temp.style.backgroundImage = "";
  }
}
