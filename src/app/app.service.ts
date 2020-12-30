import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http : HttpClient) {}

  callService(){
    console.log("Calling service file");
    return this.http.get("http://dummy.restapiexample.com/api/v1/employees");

  };

}
