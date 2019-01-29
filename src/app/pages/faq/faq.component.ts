import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { FaqService } from '../../core/services/faq/faq.service';

@Component({
  selector: 'faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit, AfterContentChecked {
  private faqList: Object[] = null;

  constructor(private faqserv: FaqService) { 
    
  }

  ngOnInit() {
    this.faqList = this.faqserv.getFaqList();
  }

  ngAfterContentChecked() {
    if(this.faqList == null)
      this.faqList = this.faqserv.getFaqList();
  }

  async delay(num){
    return new Promise(resolve =>setTimeout(resolve,num));
  }
}
