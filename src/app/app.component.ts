import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  /*onKey(event: any) {
    this.values += event.target.value;
  }

  loginClick(event: Event) {
    console.log('Login clicked', event);
  }*/

constructor(private router: Router){}

  test(): void {
    this.router.navigate(['/data']);
  }
}
