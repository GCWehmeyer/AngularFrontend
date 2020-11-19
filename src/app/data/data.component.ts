import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})

export class DataComponent implements OnInit {

  uploadedFiles: Array < File > ;
  constructor(private http: HttpClient) { }
  ngOnInit(): void { }

  fileChange(element): void {
    this.uploadedFiles = element.target.files;
  }

  upload(): void{
    const formData = new FormData();
    /*for (var i = 0; i < this.uploadedFiles.length; i++) {
     //   formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
  }*/
    this.http.post('/api/upload', formData)
    .subscribe((response) => {
         console.log('response received is ', response);
    });
  }
}
