import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { ApiserviceService } from '../services/apiservice.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-classify',
  templateUrl: './classify.component.html',
  styleUrls: ['./classify.component.scss']
})

export class ClassifyComponent implements OnInit {
  fileData: File = null;
  constructor(private http: HttpClient,  private API: ApiserviceService) { }

  ngOnInit(): void {
  }

  fileProgress(fileInput: any): void {
    this.fileData = <File>fileInput.target.files[0];
  }

  testing(): any{
    this.API.getData().subscribe(res => {
      console.log(res);
    });
  }

  onSubmit(): void {
    const formData = new FormData();
    formData.append('file', this.fileData);
    this.http.post('/', formData)
      .subscribe(res => {
        console.log(res);
        alert('SUCCESS !!');
      });
  }

}
