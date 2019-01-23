import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CategoriesService} from '../../core/services/categories/categories.service';

@Component({
  selector: 'zb-test-home',
  templateUrl: './zb-test-home.component.html',
  styleUrls: ['./zb-test-home.component.scss']
})
export class ZbTestHomeComponent implements OnInit {
  category = 'Business';
  data = [];
  constructor(
    private categoriesSerevice: CategoriesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  getCategoryDetails(category) {
    this.category = category;
    this.categoriesSerevice.getHomePageCategory(category)
      .subscribe(data => {
        console.log(data);
        this.data = data;
      });
  }
}
