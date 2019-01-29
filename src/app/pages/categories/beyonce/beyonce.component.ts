import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';
import {User} from '../../../core/models/User';
import {AngularFireList} from '@angular/fire/database';
import {UserService} from '../../../core/services/user/user.service';

@Component({
  selector: 'beyonce',
  templateUrl: './beyonce.component.html',
  styleUrls: ['./beyonce.component.css'],
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
export class BeyonceComponent implements OnInit {
  user: User;
  temp: HTMLElement;
  postList;
  state = 'loading';

  constructor(private service: UserService) {
  }

  ngOnInit() {
    //get user
    this.service.getUser("beyonce").subscribe(data=>{
      this.user=data;
    });
  }

  ngAfterViewInit() {
    this.state = 'loaded';
  }

}
