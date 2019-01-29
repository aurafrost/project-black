import { Component, OnInit, Input } from '@angular/core';
import { UploadimageService } from 'src/app/core/services/image/uploadimage.service';
import { FileUpload } from 'src/app/core/models/FileUpload';

@Component({
  selector: 'details-upload',
  templateUrl: './details-upload.component.html',
  styleUrls: ['./details-upload.component.css']
})
export class DetailsUploadComponent implements OnInit {
 
  @Input() fileUpload: FileUpload;
 
  constructor(private uploadService: UploadimageService) { }
 
  ngOnInit() {
  }
 
  deleteFileUpload(fileUpload) {
    this.uploadService.deleteFileUpload(fileUpload);
  }
}