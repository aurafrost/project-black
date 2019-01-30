import { Component, OnInit } from '@angular/core';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { User } from '../../../core/models/User';
import { UserService } from '../../../core/services/user/user.service';
import { NewsApiService } from 'src/app/core/services/news-api.service';
import { Promise } from 'q';

@Component({
  selector: 'personality',
  templateUrl: './personality.component.html',
  styleUrls: ['./personality.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('*<=>*', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(-200px)' }),
          stagger(100, [
            animate('500ms 400ms cubic-bezier(0.35, 0, 0.25, 1)',
              style({ opacity: 1, transform: 'none' }))
          ])
        ], { optional: false }),
        // query(':leave', [
        //   style({ opacity: 1, transform: 'none' }),
        //   stagger(-100, [
        //     animate('10ms cubic-bezier(0.35, 0, 0.25, 1)',
        //       style({ opacity: 0, transform: 'translateY(+200px)' }))
        //   ])
        // ])
      ])
    ]),
    trigger('itemFallAnimation', [
      transition('*<=>*', [

        style({ opacity: 0, transform: 'translateY(-200px)' }),

        animate('500ms 400ms cubic-bezier(0.35, 0, 0.25, 1)',
          style({ opacity: 1, transform: 'none' }))

        ,
        // query(':leave', [
        //   style({ opacity: 1, transform: 'none' }),
        //   stagger(-100, [
        //     animate('10ms cubic-bezier(0.35, 0, 0.25, 1)',
        //       style({ opacity: 0, transform: 'translateY(+200px)' }))
        //   ])
        // ])
      ])
    ]),
  ]
})
export class PersonalityComponent implements OnInit {
  user: User;
  temp: HTMLElement;
  postList;
  state = 'loading';
  mArticles:Array<any>;
  personReady: Promise<boolean>;

  constructor(
    private service: UserService,
    private newsapi: NewsApiService) {
      console.log(this.personReady);
      this.personReady = Promise((resolve, reject) => {
        this.service.getProfile().subscribe(t => {
          //get user
          this.service.getUser(t.topic).subscribe(data => {
            this.user = data;
            resolve(true);
          });
          //init news
          this.newsapi.initArticles(t.topic).subscribe(data => this.mArticles = data['articles']);
        })
      });
      
  }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.state = 'loaded';
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
