import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  Employee: any = [];
    Login: any = [];

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit(): void {
    // this.loadEmployees()
     this.loadLogin()
  }

  loadLogin() {
  return this.restApi.getLogin("correo@gmail.com", "111").subscribe((data: {}) => {
    console.log(data);
    this.Login = data;
  })
}


loadEmployees() {
return this.restApi.getEmployees().subscribe((data: {}) => {
  console.log(data);
  this.Employee = data;
})
}

}
