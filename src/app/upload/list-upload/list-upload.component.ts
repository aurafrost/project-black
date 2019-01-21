import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';


import { UploadimageService } from 'src/app/core/services/image/uploadimage.service';

@Component({
  selector: 'list-upload',
  templateUrl: './list-upload.component.html',
  styleUrls: ['./list-upload.component.css']
})
export class ListUploadComponent implements OnInit {

  fileUploads: any[];
 
  constructor(private uploadService: UploadimageService) { }
 
  ngOnInit() {
    this.uploadService.getFileUploads(6).snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(fileUploads => {
      this.fileUploads = fileUploads;
      console.log(fileUploads);
    });
  }
}