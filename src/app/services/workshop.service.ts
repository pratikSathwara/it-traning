import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { UpcomingEvt } from '../interfaceclass/upcoming-evt';
import { EvtRegisterClas } from '../interfaceclass/evt-register-clas';
@Injectable({
  providedIn: 'root'
})
export class WorkshopService {
  serverurl = "http://localhost:3000/";
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };


  constructor(private http:HttpClient) { }
  displayworkshop(){
    return this.http.get<UpcomingEvt>(this.serverurl + 'event')
  }
  displayworkshopid(id){
    return this.http.get<UpcomingEvt>(this.serverurl + 'event/' + id)
  }
  
  editevt(id):Observable<UpcomingEvt>{
    return this.http.post<UpcomingEvt>(this.serverurl + 'event/',JSON.stringify(id), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
 
  deleteWorkshop(id){
    return this.http.delete<UpcomingEvt>(this.serverurl + 'event/' + id)
  }


   pudata(id:number): Observable<UpcomingEvt>{
return this.http.get<UpcomingEvt>(this.serverurl+ 'event/' + id);
}

UpdateBook(id,employee):Observable<UpcomingEvt>{
  return this.http.put<UpcomingEvt>(this.serverurl + 'event/' +id ,JSON.stringify(employee),this.httpOptions);
}


      // workshop event display
getevent():Observable<UpcomingEvt>{
  return this.http.get<UpcomingEvt>(this.serverurl + 'event' )
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}
deleteworkshop(id){
  return this.http.delete<EvtRegisterClas>(this.serverurl + 'evtRegister/'+ id )
}

  // print the workshop event data
  printevent():Observable<EvtRegisterClas>{
    return this.http.get<EvtRegisterClas>(this.serverurl + 'evtRegister' )
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
    // register the workshop event
    evtregister(id):Observable<EvtRegisterClas>{
      return this.http.post<EvtRegisterClas>(this.serverurl + 'evtRegister',JSON.stringify(id), this.httpOptions)
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
