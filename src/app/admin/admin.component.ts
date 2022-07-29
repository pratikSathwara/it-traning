import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {Title} from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { AdminRegister } from '../interfaceclass/admin-register';
import { AdminService } from '../services/admin.service';
import { ContactUsService } from '../services/contact-us.service';
import { SliderService } from '../services/slider.service';
import { WorkshopService } from '../services/workshop.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 
 
  title="Dashboard";
  imgpathname :Observable<AdminRegister>;

  imgpath = "./assets/img/";
  constructor(private titleservice:Title, public router: Router, private services:AdminService,
     private service:SliderService,
     private workservice:WorkshopService,
     private contser:ContactUsService) {
    
  }

  ngOnInit(): void {
    this.imgpathname = this.services.getadmindWithId(localStorage.getItem('loginid')).pipe(map(book => book.imgpath));


  }
 

  

  setPageTitle(title:string){
    this.titleservice.setTitle(title);
  }
  logindata(pass:any){

  }

}