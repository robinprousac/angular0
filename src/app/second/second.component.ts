import { Component, OnInit,  Input } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  Employee: any = [];
    Login: any = [];

    employeeDetails: any = {  email: '', phone: '' }

    Productos: any = [ {producto: '2', subtotal: '100'}, {producto: '2', subtotal: '150'}];

  constructor(
    public restApi: RestApiService,
      public router: Router
  ) { }

  ngOnInit(): void {
    // this.loadEmployees()
  //   this.loadLogin()
  }


  addEmployee(name: string,  email: string, phone: string) {
  //  this.employeeDetails.name = name;
    this.employeeDetails.email = email;
    this.employeeDetails.phone = phone;
    console.log(this.employeeDetails);
  this.restApi.createEmployee(this.Productos).subscribe((data: {}) => {
    this.router.navigate(['/first'])
  })
}


/*
  loadLogin() {
  return this.restApi.getLogin("correo@gmail.com", "111").subscribe((data: {}) => {
    console.log(data);
    this.Login = data;
  })
}
*/

/*
loadEmployees() {
return this.restApi.getEmployees().subscribe((data: {}) => {
  console.log(data);
  this.Employee = data;
})
}
*/
}
