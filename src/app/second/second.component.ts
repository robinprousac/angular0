import { Component, OnInit,  Input } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { Router } from '@angular/router';
//import { SocketioService} from '../socketio.service';
import {io} from 'socket.io-client'


//const SOCKET_ENDPOINT = 'localhost:3000';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  //private socket: SocketIOClient.Socket;
  socket;
  message: string;
  Employee: any = [];
    Login: any = [];

    employeeDetails: any = {  email: '', phone: '' }

    Productos: any = [ {producto: '2', subtotal: '100'}, {producto: '2', subtotal: '150'}];

  constructor(
    public restApi: RestApiService,
      public router: Router,
    //  private socketService: SocketioService
  ) {
//  this.socket = io('http://localhost:3000');
}

  ngOnInit(): void {
    // this.loadEmployees()
    // this.load()
  //  this.socketService.setupSocketConnection();
    this.setupSocketConnection();


  }


  setupSocketConnection() {
     this.socket = io('http://localhost:3000');
   this.socket.on('message-broadcast', (data: string) => {
   if (data) {
    const element = document.createElement('li');
    element.innerHTML = data;
    element.style.background = 'white';
    element.style.padding =  '15px 30px';
    element.style.margin = '10px';
    document.getElementById('message-list').appendChild(element);
    }
  });
}


  SendMessage() {
     this.socket.emit('message', this.message);
     const element = document.createElement('li');
     element.innerHTML = this.message;
     element.style.background = 'white';
     element.style.padding =  '15px 30px';
     element.style.margin = '10px';
     element.style.textAlign = 'right';
     document.getElementById('message-list').appendChild(element);
     this.message = '';
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


//  load(){
  //  this.socket = io(SOCKET_ENDPOINT);
//  }

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
