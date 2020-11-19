import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})

export class DataComponent implements OnInit {

  constructor(private http: HttpClient, private API: ApiserviceService) { }
  ngOnInit(): void { }

  testing(): any{
    this.API.getData().subscribe(res => {
      console.log(res);
    });
  }

}
