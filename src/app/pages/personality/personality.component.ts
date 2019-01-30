import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/User';
import { UserService } from 'src/app/core/services/user/user.service';
import { NewsApiService } from 'src/app/core/services/news-api.service';
import { ImageService } from 'src/app/core/services/image/image.service';

@Component({
  selector: 'personality',
  templateUrl: './personality.component.html',
  styleUrls: ['./personality.component.css']
})
export class PersonalityComponent implements OnInit {
  user: User;
  temp: HTMLElement;
  mArticles: Array<any>;
  personReady: Promise<boolean>;
  auth = JSON.parse(localStorage.getItem('auth'));
  constructor(
    private service: ImageService,
    private uservice: UserService,
    private newsapi: NewsApiService) {
  }

  ngOnInit() {
    console.log(this.auth);
    this.personReady = new Promise((resolve, reject) => {
      this.uservice.getProfile().subscribe(t => {
        //get profile
        this.uservice.getUser(t.topic).subscribe(data => {
          this.user = data;
          //check subscriptions
          resolve(true);
          this.uservice.getUser(this.auth.uid + "/subscriptions/" + t.topic).subscribe(data => {
            if (data) {
              document.getElementById('subbtn').style.display = "none";
              document.getElementById('unsubbtn').style.display = "inline";
            }
            else {
              document.getElementById('content-container').style.display = "none";
            }
          });
        });
        //init news
        this.newsapi.initArticles(t.topic).subscribe(data => this.mArticles = data['articles']);
      })
    });

  }

  //if not subscribed
  subscribe() {
    this.uservice.getTopic().subscribe(t => {
      console.log(t)
      //need to replace temp with current user later
      this.uservice.addSub(this.auth.uid, t.topic);
    });
    document.getElementById('subbtn').style.display = "none";
    document.getElementById('unsubbtn').style.display = "inline";
    this.ngOnInit(); //not calling for some reason
  }

  //if already subscribed
  unsubscribe() {
    document.getElementById('unsubbtn').style.display = "none";
    document.getElementById('subbtn').style.display = "inline";
    this.uservice.getTopic().subscribe(t => {
      //need to replace temp with current user later
      this.uservice.removeSub(this.auth.uid, t.topic);
    })
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

}
