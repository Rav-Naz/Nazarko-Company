import { APIResponse } from './../models/response';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url: string;
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.url = environment.apiUrl;
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  }

  sendMessage(sender: string, sender_email: string, message: string): Promise<APIResponse> {
    return new Promise<APIResponse>((resolve, rejects) => {
      this.http.post<APIResponse>(`${this.url}site/send-message`, {
        sender: sender,
        sender_email: sender_email,
        message: message
      }).toPromise().then(
        (value) => { resolve(value) },
        (error) => { rejects(error) }
      );
    })
  }
}
