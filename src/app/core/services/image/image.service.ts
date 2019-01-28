import { Injectable } from '@angular/core';
import 'firebase/storage';

import { AngularFirestore } from 'angularfire2/firestore';
import { Image } from '../../models/Image';
import { BehaviorSubject } from 'rxjs';
import { Topic } from '../../models/Topic';
import { Product } from '../../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  topic:string;
  constructor(private db: AngularFirestore) { }

  setTopic(name){
    this.topic=name;
    // this.db.doc('image/topic').update(name);
  }

  getTopic(){
    return this.topic;
    // return this.db.doc<Topic>('image/topic').valueChanges();
  }

  getImage(base){
    return this.db.doc<Image>('image/'+base).valueChanges();
  }
  
  getImagePath(base,path){
    return this.db.doc<Image>('image/'+base+"/"+path).valueChanges();
  }

  getShopList(base){
    // return this.db.doc<Product>('image/'+base+"/"+path).valueChanges();
    return this.db.collection<Product>('image/'+base+'/shop').valueChanges();
  }
}
