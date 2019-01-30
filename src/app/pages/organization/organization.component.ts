import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ImageService } from 'src/app/core/services/image/image.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/models/Product';
import { NavItem } from 'src/app/core/models/NavItem';
import { Image } from 'src/app/core/models/Image';
import { NewsApiService } from 'src/app/core/services/news-api.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {
  temp: HTMLElement;
  featuredList: Image[];
  shopList: Product[];
  navList: NavItem[];
  auth = JSON.parse(localStorage.getItem('auth'));

  //for news
  mArticles: Array<any>;
  mSources: Array<any>;
  constructor(
    private service: ImageService,
    private uservice: UserService,
    private router: Router,
    private newsapi: NewsApiService) {
      this.router.onSameUrlNavigation = 'reload';
  }

  ngOnInit() {
    console.log("on init hit")
    //check if subscribed
    this.service.getTopic().subscribe(t => {

      //check topic
      console.log("Current Topic from db: " + t.topic);
      // if (t.topic == null) {
      //   this.router.navigate(['/explore']);
      // }

      //load news articles
      this.newsapi.initArticles(t.topic).subscribe(mdata => this.mArticles = mdata['articles']);

      //load news sources
      // this.newsapi.initSources().subscribe(data => this.mSources = data['sources']); 

      //check subscriptions
      this.uservice.getUser(this.auth.uid + "/subscriptions/" + t.topic).subscribe(data => {
        if (data) {
          console.log("hit btn change")
          document.getElementById('unsubbtn').style.display = "inline";
          document.getElementById('subbtn').style.display = "none";

          document.getElementById('nav').style.display = "flex";
          document.getElementById('video').style.display = "flex";
          document.getElementById('sidevideo').style.display = "flex";
          document.getElementById('tabset').style.display = "flex";
          document.getElementById('undervideo').style.display = "flex";
        }
        else {
          console.log("hit btn change")
          document.getElementById('nav').style.display = "none";
          document.getElementById('video').style.display = "none";
          document.getElementById('sidevideo').style.display = "none";
          document.getElementById('tabset').style.display = "none";
          document.getElementById('undervideo').style.display = "none";
        }
      });
    });

    //get base elements
    this.getBaseElements();

    //nav elements
    this.getNavElements();

    //get shop list
    this.getShopList();

  }

  facebookLink: string = "";
  twitterLink: string = "";

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
        this.temp.style.height = "1500px";
        this.temp.style.backgroundImage = "url(" + data.bg + ")";
        this.temp.style.backgroundRepeat = "repeat";
        //set video
        this.temp = document.getElementById('videoframe');
        this.temp.setAttribute('src', data.video);
        //set fb
        console.log("test Facebook path")
        console.log(data.facebook)

        this.facebookLink = data.facebook;
        //set twitter
        // this.temp = document.getElementById('twitter');
        // this.temp.setAttribute('href', data.twitter);
        this.twitterLink = data.twitter;
      });
    });
  }

  getNavElements() {
    this.service.getTopic().subscribe(t => {
      this.service.getNavList(t.topic).subscribe(data => {
        this.navList = data;
      })
    });
  }

  getShopList() {
    this.service.getTopic().subscribe(t => {
      this.service.getList(t.topic, "featured").subscribe(data => {
        this.featuredList = data;
      })
    });
    this.service.getTopic().subscribe(t => {
      this.service.getShopList(t.topic).subscribe(data => {
        this.shopList = data;
      });
    });
  }

  //not implemented. keeping in case though.
  searchArticles(source) {
    console.log("selected source is: " + source);
    this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }

  //method to check subscriptions. not complete
  // subCheck(){
  //   this.temp = document.getElementById('subbtn');
  // }

  //if not subscribed
  subscribe() {
    document.getElementById('subbtn').style.display = "none";
    document.getElementById('unsubbtn').style.display = "inline";
    console.log(this.router.onSameUrlNavigation)
    this.service.getTopic().subscribe(t => {
      //need to replace temp with current user later
      this.uservice.addSub(this.auth.uid, t.topic);
      console.log('hit router navigate')
      this.router.navigate(['organization']);
    });
  }

  //if already subscribed
  unsubscribe() {
    document.getElementById('unsubbtn').style.display = "none";
    document.getElementById('subbtn').style.display = "inline";
    this.service.getTopic().subscribe(t => {
      //need to replace temp with current user later
      this.uservice.removeSub(this.auth.uid, t.topic);
      console.log('hit router navigate')
      this.router.navigate(['organization']);
      
    })
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

  tabby2(evt, name) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent2");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks2");
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
