import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { generate } from 'rxjs';
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
    {name:'Jay-Z', numSubs: 14500, postsMonth: 17, img: "../../../assets/png/jay-z_200x200.png"},
    {name:'Robert Downy Jr', numSubs: 13056, postsMonth: 20, img: "../../../assets/png/rdj_200x200.png"},
    {name:'Willem Dafoe', numSubs: 12500, postsMonth: 12, img: "../../../assets/png/Willem_Dafoe_200x200.png"}
  ]
  profiles = [];

  constructor(private activatedRoute_:ActivatedRoute) {
    activatedRoute_.params.subscribe(params => {
      this.term = params.term;
    });
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
    
    //partial match search.
    //must run first to ensure the partial matches are shown last
    for(let p of this.hiddenProfiles)
    {
      if(p.name.toLowerCase().includes(this.term.substr(0,1).toLowerCase()))
      {
        if(this.profiles.indexOf(p.name) == -1)
          this.profiles.push(p);
      }
    }

    //full match search
    for(let p of this.hiddenProfiles)
    {
      if(p.name === this.term)
      {
        this.profiles.push(p);
      }
    }
    this.profiles = this.profiles.reverse();

    console.log(this.profiles);
  }

}
