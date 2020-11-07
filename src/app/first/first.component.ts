import { Component } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { enviroment } from '../shared/enviroment';

@Component({
  selector: 'app-first',
  template: `
    <button (click)="onClickMe()">Click me!</button>
    {{clickMessage}}`
//  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  env = enviroment;
  clickMessage = '';


  constructor(
    public restApi: RestApiService
  ) { }


   onClickMe() {
     this.clickMessage = 'You are my hero!';

     this.loadEmployees();


 console.log(this.env.usersession);
     this.env.usersession = 'robins';
      console.log(this.env.usersession);




   }

   loadEmployees() {
   return this.restApi.getEmployees().subscribe((data: {}) => {
     console.log(data);
    // this.Employee = data;
   })
   }



}
//select id from facturas order by id desc top 1;
