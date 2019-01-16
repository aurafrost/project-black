import { Component, OnInit } from '@angular/core';

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
      title: 'Robert Downy Jr',
      img: '../../../assets/png/rdj_200x200.png'
    },
    {
      id: 2,
      title: 'Jay-Z',
      img: '../../../assets/png/jay-z_200x200.png'
    },
    {
      id: 3,
      title: 'Kanye West',
      img: '../../../assets/png/kanye_200x200.png'
    },
    {
      id: 4,
      title: 'Tom Cruise',
      img: '../../../assets/png/cruise_200x200.png'
    },
    {
      id: 5,
      title: 'Beyonce',
      img: '../../../assets/png/beyonce_200x200.png'
    },
    {
      id: 6,
      title: 'Willem Dafoe',
      img: '../../../assets/png/Willem_Dafoe_200x200.png'
    },
    {
      id: 7,
      title: 'Evander Holyfield',
      img: '../../../assets/png/holyfield_200x200.png'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
