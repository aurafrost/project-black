import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/core/services/news-api.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  public uidParam;
  public user: any;

  //for news
  mArticles: Array<any>;
  constructor(
    private _newsService: NewsApiService,
    private _route: ActivatedRoute,
    private _userService: UserService,
  ) {
    this.uidParam = this._route.snapshot.params['id'];
  }

  ngOnInit() {
    this.user = this._userService.getUserById(this.uidParam)
      .subscribe(data => {
        this.user = data;
        console.log(data);
        console.log("Getting news with search: " + this.user.fname + this.user.lname)
        //init news
        this._newsService.initArticles(this.user.fname + " " + this.user.lname).subscribe(data => this.mArticles = data['articles']);
      });
  }

}
