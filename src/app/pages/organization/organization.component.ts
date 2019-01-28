import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/core/services/image/image.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/models/Product';
import { NavItem } from 'src/app/core/models/NavItem';

@Component({
  selector: 'organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {
  temp: HTMLElement;
  shopList: Product[];
  navList: NavItem[];
  constructor(private service: ImageService, private router: Router) {
  }

  ngOnInit() {
    //check topic
    this.service.getTopic().subscribe(data => {
      console.log("Current Topic from db: " + data.topic);
      if (data.topic == null) {
        this.router.navigate(['/explore']);
      }
    });
    // this.topic = this.service.getTopic();

    //get base elements
    this.getBaseElements();

    //nav elements
    this.getNavElements();

    //get shop list
    this.getShopList();
  }

  getBaseElements() {
    this.service.getTopic().subscribe(t => {
      //get image doc
      this.service.getImage(t.topic).subscribe(data => {
        //base elements
        //set title
        console.log("In getBase(): " + t.topic)
        this.temp = document.getElementById('title');
        this.temp.innerText = data.title;
        //set background
        this.temp = document.getElementById('page');
        this.temp.style.height = "2000px";
        this.temp.style.backgroundImage = "url(" + data.bg + ")";
        this.temp.style.backgroundRepeat = "repeat";
        //set video
        this.temp = document.getElementById('videoframe');
        this.temp.setAttribute('src', data.video);
        //set fb
        this.temp = document.getElementById('fb');
        this.temp.setAttribute('data-href', data.facebook);
        //set twitter
        this.temp = document.getElementById('twitter');
        this.temp.setAttribute('href', data.twitter);
      });
    });
  }

  getNavElements() {
    this.service.getTopic().subscribe(t => {
      this.service.getNavList(t.topic).subscribe(data=>{
        this.navList=data;
      })
    });
  }

  getShopList() {
    this.service.getTopic().subscribe(t => {
      this.service.getShopList(t.topic).subscribe(data => {
        this.shopList = data;
      });
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
    if (evt) {
      evt.currentTarget.className += " active";
    }
  }

  ngOnDestroy() {
    this.temp = document.getElementById('page');
    this.temp.style.backgroundImage = "";
  }
}
