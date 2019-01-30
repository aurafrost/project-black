import { Component, OnInit } from '@angular/core';
import { User } from '../../../core/models/User';
import { UserService } from '../../../core/services/user/user.service';
import { NewsApiService } from 'src/app/core/services/news-api.service';

@Component({
  selector: 'personality',
  templateUrl: './personality.component.html',
  styleUrls: ['./personality.component.css']
})
export class PersonalityComponent implements OnInit {
  user: User;
  temp: HTMLElement;
  mArticles:Array<any>;

  constructor(
    private service: UserService,
    private newsapi: NewsApiService) {
  }

  ngOnInit() {
    this.service.getProfile().subscribe(t => {
      //get user
      this.service.getUser(t.topic).subscribe(data => {
        this.user = data;
        console.log(this.user)
      });
      //init news
      this.newsapi.initArticles(t.topic).subscribe(data => this.mArticles = data['articles']);
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
