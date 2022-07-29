import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactForm } from 'src/app/interfaceClass/contact-form';
import { ContactUsService } from 'src/app/services/contact-us.service';

@Component({
  selector: 'app-contect',
  templateUrl: './contect.component.html',
  styleUrls: ['./contect.component.css']
})
export class ContectComponent implements OnInit {
  passd:FormGroup;
  constructor(private service:ContactUsService, private router:Router, private formbuilder:FormBuilder) { }
  ngOnInit(): void {
    this.passd =  this.formbuilder.group({
      name:['',[Validators.required]],
      email:['',[Validators.required, Validators.email]],
      phone:['',[Validators.required]],
      msgs:['',[Validators.required]],
    });
  }
  get name(){return this.passd.get('name')}
  get email(){return this.passd.get('email')}
  get phone(){return this.passd.get('phone')}
  get msgs(){return this.passd.get('msgs')}

  submitdata(passd:any){
    let passing = passd.value;
      this.createContact(passing);
  }
  createContact(contact:ContactForm){
    this.service.contactInfo(contact).subscribe(data => this.router.navigate(['/home']))
    alert("your request successful" );
  }
}