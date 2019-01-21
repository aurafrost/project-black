import { Component, OnInit } from '@angular/core';
import { UploadimageService } from 'src/app/core/services/image/uploadimage.service';
import { FileUpload } from 'src/app/core/models/FileUpload';

@Component({
  selector: 'form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.css']
})
export class FormUploadComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  progress: { percentage: number } = { percentage: 0 };

  constructor(private uploadimageService: UploadimageService) { }

  ngOnInit() {
  }

  selectFile(event) {
    const file = event.target.files.item(0);
 
    if (file.type.match('image.*')) {
      this.selectedFiles = event.target.files;
    } else {
      alert('invalid format!');
    }
  }
 
  upload() {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;
 
    this.currentFileUpload = new FileUpload(file);
    this.uploadimageService.pushFileToStorage(this.currentFileUpload, this.progress);
  }
}

