import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  termprivate(){
    this.router.navigate(['terms'])
  }
  custsopport(){
    this.router.navigate(['support'])
  }
  faquestions(){
    this.router.navigate(['faq'])
  }
  about(){
    this.router.navigate(['about'])
  }
}
