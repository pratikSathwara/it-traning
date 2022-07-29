import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ProfAns } from '../interfaceclass/prof-ans';
import { UpcomingEvt } from '../interfaceclass/upcoming-evt';

@Injectable({
  providedIn: 'root'
})
export class SliderService {
  serverurl = "http://localhost:3000/";
httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

  constructor(private http:HttpClient) { }
 //  slider data 
 profAns():Observable<ProfAns>{
  return this.http.get<ProfAns>(this.serverurl + 'profassiormsg')
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}

// Add the new slider (admin/addslider)
addslider(id:ProfAns):Observable<ProfAns>{
  return this.http.post<ProfAns>(this.serverurl + 'profassiormsg/', id, this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}
editslider(id:number):Observable<ProfAns>{
  return this.http.get<ProfAns>(this.serverurl + 'profassiormsg/'+ id)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}
editsliderd(id ,employee):Observable<ProfAns>{
  return this.http.put<ProfAns>(this.serverurl + 'profassiormsg/'+ id,JSON.stringify(employee), this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}
deleteslider(id){
  return this.http.delete<ProfAns>(this.serverurl + 'profassiormsg/'+id )
}


getevent():Observable<UpcomingEvt>{
  return this.http.get<UpcomingEvt>(this.serverurl + 'event' )
  .pipe(
    retry(1),
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
