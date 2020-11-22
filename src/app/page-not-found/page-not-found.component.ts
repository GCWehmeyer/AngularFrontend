import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private http: HttpClient, private API: ApiserviceService) { }

  ngOnInit(): void {
  }

}
