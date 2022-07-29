import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


import { EvtRegisterClas } from '../interfaceclass/evt-register-clas';
import { ProfAns } from '../interfaceclass/prof-ans';
import { ContactForm } from '../interfaceclass/contact-form';
import { AdminRegister } from '../interfaceclass/admin-register';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { UpcomingEvt } from '../interfaceclass/upcoming-evt';


@Injectable({
  providedIn: 'root'
})
export class UpcomingEvtSerService {

  constructor(private http:HttpClient) { }





  
// Edit workshop event




}
