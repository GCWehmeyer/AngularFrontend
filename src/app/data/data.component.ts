import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  uploadFile(event: Event) {
    console.log('Login clicked', event);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
