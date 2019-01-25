import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/core/services/image/image.service';
import { Image } from 'src/app/core/models/Image';

@Component({
  selector: 'livenation',
  templateUrl: './livenation.component.html',
  styleUrls: ['./livenation.component.css']
})
export class LivenationComponent implements OnInit {
  image:any;
  constructor(private service:ImageService) { 
    this.image=service.getImage();
    console.log("Document? "+service.getImage());
    console.log("Image object: "+this.image.toString());
  }

  ngOnInit() {
  }
  subscribe(name){

  }
  openCity(evt, cityName) {
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
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
}
