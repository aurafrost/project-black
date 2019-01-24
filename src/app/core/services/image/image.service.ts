import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import * as firebase from 'firebase/app';
import 'firebase/storage';

import { FileUpload } from 'src/app/core/models/FileUpload';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private basePath = '/uploads';

  constructor(private db: AngularFireDatabase) { }

  getFileUploads(numberItems): AngularFireList<FileUpload> {
    return this.db.list(this.basePath, ref =>
      ref.limitToLast(numberItems));
  }
}
