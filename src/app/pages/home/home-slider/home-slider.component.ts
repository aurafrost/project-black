import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.css']
})
export class HomeSliderComponent implements OnInit {
  title = 'socialappbeta111';
  pictures = [
    {
      id: 1,
      title: 'RobertDowneyJr',
      img: '../../../assets/png/rdj_200x200.png'
    },
    {
      id: 2,
      title: 'Jay-Z',
      img: '../../../assets/png/jay-z_200x200.png'
    },
    {
      id: 3,
      title: 'KanyeWest',
      img: '../../../assets/png/kanye_200x200.png'
    },
    {
      id: 4,
      title: 'TomCruise',
      img: '../../../assets/png/cruise_200x200.png'
    },
    {
      id: 5,
      title: 'Beyonce',
      img: '../../../assets/png/beyonce_200x200.png'
    },
    {
      id: 6,
      title: 'WillemDafoe',
      img: '../../../assets/png/Willem_Dafoe_200x200.png'
    },
    {
      id: 7,
      title: 'EvanderHolyfield',
      img: '../../../assets/png/holyfield_200x200.png'
    }
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  move(title:string){
  this.router.navigate([title.toLowerCase()])
  //console.log(title);
  
  }

}
