import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpClientModule, HttpEventType, HttpErrorResponse} from '@angular/common/http';
import { ApiserviceService } from '../services/apiservice.service';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-classify',
  templateUrl: './classify.component.html',
  styleUrls: ['./classify.component.scss']
})

export class ClassifyComponent implements OnInit {
  fileData: File = null;
  @ViewChild('fileUpload', {static: false}) fileUpload: ElementRef;
  files = [];
  constructor(private API: ApiserviceService) { }

  ngOnInit(): void {
  }

  uploadFile(file): void {
    const formData = new FormData();
    formData.append('file', file.data);
    file.inProgress = true;
    this.API.upload(formData).pipe(
      map(event => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            file.progress = Math.round(event.loaded * 100 / event.total);
            break;
          case HttpEventType.Response:
            return event;
        }
      }),
      catchError((error: HttpErrorResponse) => {
        file.inProgress = false;
        return of(`Upload failed: ${file.data.name}`);
      })).subscribe((event: any) => {
        if (typeof (event) === 'object') {
          console.log(event.body);
        }
      });
  }

  onClick(): void {
    const fileUpload = this.fileUpload.nativeElement;
    fileUpload.onchange = () => {
      for (let index = 0; index < fileUpload.files.length(); index++) {
        const file = fileUpload.files[index];
        this.files.push({ data: file, inProgress: false, progress: 0});
      }
      this.uploadFile(fileUpload);
    };
    fileUpload.click();
  }

  testing(): any{
    this.API.getData().subscribe(res => {
      console.log(res);
    });
  }

}

/* onSubmit(): void {
  const formData = new FormData();
  formData.append('file', this.fileData);
  this.http.post('/api', formData)
    .subscribe(res => {
      console.log(res);
      alert('SUCCESS !!');
    });
}*/
