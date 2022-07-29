import { Component, OnInit } from '@angular/core';
import { ContactUsService } from 'src/app/services/contact-us.service';

@Component({
  selector: 'app-contect-message',
  templateUrl: './contect-message.component.html',
  styleUrls: ['./contect-message.component.css']
})
export class ContectMessageComponent implements OnInit {
  contactArry={};
  constructor(private service:ContactUsService) { }

  ngOnInit(): void {
    this.displaycontact();
  }
displaycontact(){
this.service.disContactInfo().subscribe(data => this.contactArry = data);
}
delete(id){
  if(window.confirm("are you sure want to delete data ?")){
    this.service.deletecontedtmsg(id).subscribe(data => this.displaycontact());
  }
}
}
