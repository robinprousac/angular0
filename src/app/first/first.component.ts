import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  template: `
    <button (click)="onClickMe()">Click me!</button>
    {{clickMessage}}`
//  styleUrls: ['./first.component.css']
})
export class FirstComponent {


  clickMessage = '';

   onClickMe() {
     this.clickMessage = 'You are my hero!';
   }

}
//select id from facturas order by id desc top 1; 
