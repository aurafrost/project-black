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
    // var collection=this.db.doc('image');
    return this.db.doc<Image>('image/livenation').valueChanges();
  }
}
