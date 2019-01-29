import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {} from '@angular/cli';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  private faqCollection: AngularFirestoreCollection;
  private faq = new BehaviorSubject<Object[]>(null);
  private faqObs = this.faq.asObservable();
  private faqList: Object[] = null;
  constructor(private afs: AngularFirestore) { 
    this.faqCollection = this.afs.collection('faq');

    this.faqObs = this.faqCollection.valueChanges().map(changes => {
      console.log(changes)
      return changes;
    })

    this.faqObs.subscribe(list => {
      this.faqList = list;
    })
  }

  getFaqObservable() {
    return this.faqObs;
  }

  getFaqList() {
    if(this.faqList != null)
      return this.faqList;
    else{
      this.delay(2000);
      return this.faqList;
    }
  }

  async delay(num){
    return new Promise(resolve =>setTimeout(resolve,num));
  }
}
