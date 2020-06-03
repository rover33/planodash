import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-request-log',
  templateUrl: './request-log.component.html',
  styleUrls: ['./request-log.component.css']
})
export class RequestLogComponent implements OnInit {
  requests;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.post<any>('https://planocore.planomatic.com/api/v1/code_challenges/request_logs_index', {id: 'hello'} ).subscribe(data => {
      this.requests = data.data.results
      console.log(data.data.results)
    })
  }

}
