import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private httpClient: HttpClient) { }

  private urlAPI = 'http://localhost:8000';

  getData(): Observable<any> {
    return this.httpClient.get<any>(this.urlAPI + '/data');
  }

  sendData(newData: any): Observable<any> {
    return this.httpClient.post<any>(this.urlAPI + '/data', {newData});
  }
}
