import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EvtRegisterClas } from 'src/app/interfaceclass/evt-register-clas';
import { UpcomingEvt } from 'src/app/interfaceclass/upcoming-evt';
import { WorkshopService } from 'src/app/services/workshop.service';

@Component({
  selector: 'app-display-total-workshop',
  templateUrl: './display-total-workshop.component.html',
  styleUrls: ['./display-total-workshop.component.css']
})
export class DisplayTotalWorkshopComponent implements OnInit {
  bookidtoupdate = 0;
  date = new Date('yyyy-MM-dd');
  constructor(private service:WorkshopService,  private router:Router) { }
  ngOnInit(): void {
    this.displaytotalWorkshop();
    }
  mydata:any = {};
  imgpath = "./assets/img/";
displaytotalWorkshop(){
 this.mydata =  this.service.displayworkshop();
}
selectedFile :any;
onFileSelected(event) {
    this.selectedFile = event.target.value;
}

delete(id){
  if(window.confirm("are you sure want to delete data ?")){
  this.service.deleteWorkshop(id).subscribe(data => this.displaytotalWorkshop());
}}

}
