import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ContactForm } from '../interfaceclass/contact-form';
import { catchError, retry } from 'rxjs/operators';
import { AdminRegister } from '../interfaceclass/admin-register';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  serverurl = "http://localhost:3000/";
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(private http:HttpClient) { }

// contect us form data get
contactInfo(id):Observable<ContactForm>{
  return this.http.post<ContactForm>(this.serverurl + 'contactus',JSON.stringify(id), this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}
// contect us form data display
disContactInfo():Observable<ContactForm>{
  return this.http.get<ContactForm>(this.serverurl + 'contactus');
}
deletecontedtmsg(id){
  return this.http.delete<ContactForm>(this.serverurl + 'contactus/'+id )
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
