import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiserviceService } from '../services/apiservice.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-classify',
  templateUrl: './classify.component.html',
  styleUrls: ['./classify.component.scss']
})
export class ClassifyComponent implements OnInit {

  constructor(private http: HttpClientModule, private api: ApiserviceService) { }

  ngOnInit(): void {
  }
}
