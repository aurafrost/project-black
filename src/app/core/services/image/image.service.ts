import { Injectable } from '@angular/core';
import 'firebase/storage';

import { AngularFirestore } from 'angularfire2/firestore';
import { Image } from '../../models/Image';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  topic:string;
  constructor(private db: AngularFirestore) { }

  setTopic(name){
    this.topic=name;
  }

  getTopic(){
    return this.topic;
  }

  getImage(link){
    return this.db.doc<Image>(link+'/livenation').valueChanges();
  }
}
