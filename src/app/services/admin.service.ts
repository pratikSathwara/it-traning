import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { AdminRegister } from '../interfaceclass/admin-register';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  serverurl = "http://localhost:3000/";
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(private http:HttpClient) { }
// register workshop data by user
registerdata(id):Observable<AdminRegister>{
  return this.http.post<AdminRegister>(this.serverurl + 'Admin-register' , JSON.stringify(id), this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}

  // admin register data 
  getadmindata():Observable<AdminRegister>{
    return this.http.get<AdminRegister>(this.serverurl + 'Admin-register')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  logindata():Observable<any>{
    return this.http.get<any>(this.serverurl + 'Admin-register')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  // Admin register data ID fetch
  getadmindWithId(id):Observable<AdminRegister>{
    return this.http.get<AdminRegister>(this.serverurl + 'Admin-register/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Update the admin data
  Updateadmindata(id, employee):Observable<AdminRegister>{
    return this.http.put<AdminRegister>(this.serverurl + 'Admin-register/' + id, JSON.stringify(employee), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  // delete the admin data
  Deleteadmindata(id){
    return this.http.delete<AdminRegister>(this.serverurl + 'Admin-register/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
// Error handling 
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
