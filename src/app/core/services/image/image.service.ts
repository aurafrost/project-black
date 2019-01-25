import { Injectable } from '@angular/core';
import 'firebase/storage';

import { AngularFirestore } from 'angularfire2/firestore';
import { Image } from '../../models/Image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private db: AngularFirestore) { }

  getImage(){
    var collection=this.db.collection('image');
    return collection.doc<Image>('livenation').valueChanges();
  }
}
