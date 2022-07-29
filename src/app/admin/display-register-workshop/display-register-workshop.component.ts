import { Component, OnInit } from '@angular/core';
import { WorkshopService } from 'src/app/services/workshop.service';

@Component({
  selector: 'app-display-register-workshop',
  templateUrl: './display-register-workshop.component.html',
  styleUrls: ['./display-register-workshop.component.css']
})
export class DisplayRegisterWorkshopComponent implements OnInit {
  printdata={};
  constructor(private service:WorkshopService) { }

  ngOnInit(): void {
    this.displaydata();
  }
  displaydata(){
    this.service.printevent().subscribe(data => this.printdata = data);
  }
  delete(id){
    if(window.confirm("are you sure want to delete data ? ")){
    this.service.deleteworkshop(id).subscribe(data => this.displaydata());
  }}
}
