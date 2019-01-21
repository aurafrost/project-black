import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../../core/services/user/user.service';
import { User } from 'src/app/core/models/User';
import { Observable } from 'rxjs';
import { listChanges, AngularFireList } from '@angular/fire/database';
import { transition, trigger, query, style, stagger, animate, keyframes, sequence } from '@angular/animations';


@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
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
export class ProfileComponent implements OnInit, AfterViewInit {
  user: User;
  htmlele: HTMLElement;
  list: AngularFireList<any[]>;
  friendsList;
  posts;
  state = 'loading';
  @ViewChild('profile') profileBlock: ElementRef;
  @ViewChild('editBlock') editBlock: ElementRef;

  constructor(private service: UserService) {
    this.user = new User(null, 'testuser', 'test@test.com', 'Test', 'User');
  }

  ngOnInit() {
    //this.user=this.service.getUser();
    
    this.profileBlock.nativeElement.style.display = "flex";
    this.editBlock.nativeElement.style.display = "none";

    //get from server
    this.getFromServer();

  }

  ngAfterViewInit() {
    this.state = 'loaded';
  }

  getFromServer() {
    this.friendsList = ['../../../assets/png/avatar.png',
      '../../../assets/png/avatar.png',
      '../../../assets/png/avatar.png',
      '../../../assets/png/avatar.png',
      '../../../assets/png/avatar.png',
      '../../../assets/png/avatar.png',
      '../../../assets/png/avatar.png',
      '../../../assets/png/avatar.png',
      '../../../assets/png/avatar.png',
      '../../../assets/png/avatar.png',
      '../../../assets/png/avatar.png'];

    this.posts = ['Cras justo odio'
      , 'Dapibus ac facilisis'
      , 'Morbi leo risus'
      , 'Porta ac consectetur '
      , 'Vestibulum at eros'
      , 'Cras justo odio']
  }


  edit() {
    
    //this.service.setUser(this.user.uid);
    this.ngOnInit();
  }

  showEdit() {
    this.profileBlock.nativeElement.style.display = "none";
    this.editBlock.nativeElement.style.display = "block";
  }

  //will need refactoring
  deletePost(id) {

    console.log(id);
    var r = confirm("Delete post?");
    if (r == true) {
      this.htmlele = document.getElementById(id) as HTMLElement;
      this.htmlele.parentNode.removeChild(this.htmlele);
    }
  }


}
