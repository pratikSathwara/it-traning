import { Component, OnInit } from '@angular/core';
import { SliderService } from 'src/app/services/slider.service';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.css']
})
export class WorkshopComponent implements OnInit {
  constructor(private service:SliderService) { }

  pushdata={};
  msgpass={};
  imgpath = "./assets/img/";

  ngOnInit(): void {
    this.displayevt();
    this.displaymsg();
  }
  displayevt(){
    this.service.getevent().subscribe(data => this.pushdata = data)
  }
  displaymsg(){
    this.service.profAns().subscribe(data => this.msgpass = data)
  }
}

