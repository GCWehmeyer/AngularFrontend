import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  values = '';
  /*onKey(event: any) {
    this.values += event.target.value;
  }

  loginClick(event: Event) {
    console.log('Login clicked', event);
  }*/
}
