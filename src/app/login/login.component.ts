import { Component } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

      Login: any = [];

      constructor(
        public restApi: RestApiService,private router: Router
      ) { }

addHero(correo: string, pass: string) {
  console.log(pass);

  return this.restApi.getLogin(correo, pass).subscribe((data: {}) => {
    console.log(data);
    if(data[0].id == 0){ alert('fail');}else{this.router.navigate(['/first'])}
    //this.Login = data;
  })
}



}
