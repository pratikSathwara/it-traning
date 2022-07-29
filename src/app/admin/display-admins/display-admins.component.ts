import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-display-admins',
  templateUrl: './display-admins.component.html',
  styleUrls: ['./display-admins.component.css']
})
export class DisplayAdminsComponent implements OnInit {


  mydata:any= {};
  imgpath = "./assets/img/";
  constructor(private service:AdminService,private http:HttpClient) { }

  ngOnInit(): void {
    this.display();
  }
display(){
  this.service.getadmindata().subscribe(data => this.mydata = data)
}
deletedata(id){
  if( window.confirm("are you sure want to delete data ??   ")){
    this.service.Deleteadmindata(id).subscribe(data => this.display() )
    }
}


}