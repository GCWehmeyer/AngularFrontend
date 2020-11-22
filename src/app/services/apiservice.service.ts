import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Injectable, Pipe } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiserviceService {
  SERVER_URL = '{Server URL}';
  constructor(private httpClient: HttpClient) { }

  private urlAPI = 'http://localhost:6000';

  upload(formData): Observable<any> {
    return this.httpClient.post<any>(this.SERVER_URL, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

  sendFile(file: any): Observable<any> {
    return this.httpClient.post<any>(this.urlAPI + '/api/upload', {file});
  }

  getData(): Observable<any> {
    return this.httpClient.get<any>(this.urlAPI + '/data');
  }

  sendData(newData: any): Observable<any> {
    return this.httpClient.post<any>(this.urlAPI + '/data', {newData});
  }
}
