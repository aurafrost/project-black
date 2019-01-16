import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { generate } from 'rxjs';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  term:string;
  hiddenProfiles = [
    {name:'Kanye West', numSubs:23111, postsMonth: 25, img: "../../../assets/png/kanye_200x200.png"},
    {name:'Tom Cruise', numSubs: 17263, postsMonth: 10, img: "../../../assets/png/cruise_200x200.png"},
    {name:'Beyonce', numSubs: 15000, postsMonth: 15, img: "../../../assets/png/beyonce_200x200.png"},
    {name: 'Evander Holyfield', numSubs: 14750, postsMonth: 11, img: "../../assets/png/holyfield_200x200.png"},
    {name:'Jay-Z', numSubs: 14500, postsMonth: 17, img: "../../../assets/png/jay-z_200x200.png"},
    {name:'Robert Downy Jr', numSubs: 13056, postsMonth: 20, img: "../../../assets/png/rdj_200x200.png"},
    {name:'Willem Dafoe', numSubs: 12500, postsMonth: 12, img: "../../../assets/png/Willem_Dafoe_200x200.png"}
  ]
  profiles = [];

  constructor(
    private activatedRoute_:ActivatedRoute, private router:Router,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private activatedRoute_:ActivatedRoute) {
    
    activatedRoute_.params.subscribe(params => {
      this.term = params.term;
      this.generateProfiles();
    });
    this.matIconRegistry.addSvgIcon('people_outline',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/sharp-people_outline-24px.svg'));
    this.matIconRegistry.addSvgIcon('av_timer',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/outline-av_timer-24px.svg'));
  } 

  ngOnInit() {
    this.generateProfiles();
  }

  changeTerm(event){
    let newTerm = event.target as HTMLInputElement;
    this.term = newTerm.value;
    console.log(this.term);
    this.generateProfiles();
  }

  generateProfiles(){
    this.profiles = [];
    if(this.term == "") return;

    //full match search
    let exact:boolean = false;
    for(let p of this.hiddenProfiles)
    {
      if(p.name.toLowerCase().includes(this.term.toLowerCase()))
      {
        console.log("hit exact");
        this.profiles = [p, ...this.profiles];
        exact = true;
      }
    }
    
    //partial match search.
    for(let p of this.hiddenProfiles)
    {
      if(p.name.toLowerCase().includes(this.term.substr(0,1).toLowerCase()))
      {
        if(!this.profiles.includes(p))
          this.profiles = [p, ...this.profiles];
      }
    }
    
    this.profiles = this.profiles.reverse();

    if(!exact)
    {
      this.profiles = [{name:'No Exact Matches Found', numSubs:-1, postsMonth: -1, img: ""},
                        ...this.profiles];
    }
    
    console.log(this.profiles);
  }

  showUser(name:string){
    console.log(name);
    switch(name){
      case('Tom Cruise'):
        this.router.navigate(['tomcruise']);
        break;
      case('Willem Dafoe'):
        this.router.navigate(['willemdafoe']);
        break;
      case('Jay-Z'):
        this.router.navigate(['jay-z']);
        break;
      case('Beyonce'):
        this.router.navigate(['beyonce']);
        break;
      
    }
  }

}
