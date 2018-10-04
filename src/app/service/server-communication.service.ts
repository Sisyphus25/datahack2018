import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerCommunicationService {
  url = '';
  constructor(private http: HttpClient) { }
  requestHotSpots(crime, time, period) {
    const http = this.http;
    const body = {};
    return new Promise(function(resolve, reject) {
      http.post('', body).subscribe((data) => {
        resolve(data);
      }, err => {
        alert(err);
        reject(err);
      });
    });
  }
}