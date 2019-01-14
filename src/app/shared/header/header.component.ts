import { Component, OnInit } from '@angular/core';
import { FilterService } from '../../core/services/filter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  logregister(){
this.router.navigate(['login-register'])
  }
}
