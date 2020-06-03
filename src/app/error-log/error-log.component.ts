import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-error-log',
  templateUrl: './error-log.component.html',
  styleUrls: ['./error-log.component.css']
})
export class ErrorLogComponent implements OnInit {
  errors;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.post<any>('https://planocore.planomatic.com/api/v1/code_challenges/error_logs_index', {id: 'hello'} ).subscribe(data => {
      this.errors = data.data.results
      this.errors.slice(1, -1)
      console.log(data.data.results)
    })
  }

}
