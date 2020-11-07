import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../shared/employee';
import { Login } from '../shared/login';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {


  //apiURL = 'http://192.168.1.30:3000';
//  apiURL = 'http://35.188.72.200/web/index.php/service';
apiURL = 'http://192.168.1.18:3000';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  getEmployees(): Observable<Employee> {
   return this.http.get<Employee>(this.apiURL + '/empleado')
   .pipe(
     retry(1),
     catchError(this.handleError)
   )
 }


 getLogin(correo, pass): Observable<Login> {
  return this.http.get<Login>(this.apiURL + '/login/?correo='+correo+'&contra='+pass)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}


createEmployee(employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiURL + '/factura/?idpersona=23&fecha=29/10/2020', JSON.stringify(employee), this.httpOptions)
  .pipe(
  //  retry(1),
    catchError(this.handleError)
  )
}


 handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}
