import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminRegister } from 'src/app/interfaceclass/admin-register';
import { AdminService } from 'src/app/services/admin.service';
import { ContactUsService } from 'src/app/services/contact-us.service';
import { SliderService } from 'src/app/services/slider.service';
import { WorkshopService } from 'src/app/services/workshop.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title="Dashboard";
  imgpathname :Observable<AdminRegister>;
  imgpathid:any ={};
  sliderid:any = {};
  workshop:any = {};
  workshopreg:any = {};
  contact:any = {};
  pass:FormGroup;
  ids:number = 2;

  imgpath = "./assets/img/";
  constructor(private titleservice:Title, public router: Router, private services:AdminService,
    private service:SliderService,
    private workservice:WorkshopService,
    private contser:ContactUsService) { }

  ngOnInit(): void {
    this.services.getadmindata().subscribe(ddd => this.imgpathid = ddd);
    this.service.profAns().subscribe(ddd => this.sliderid = ddd);
    this.workservice.displayworkshop().subscribe(ddd => this.workshop = ddd);
    this.contser.disContactInfo().subscribe(ddd => this.contact = ddd);
    this.workservice.printevent().subscribe(ddd => this.workshopreg = ddd);

  }
 
}
