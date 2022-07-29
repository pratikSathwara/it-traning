import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EvtRegisterClas } from 'src/app/interfaceclass/evt-register-clas';
import { WorkshopService } from 'src/app/services/workshop.service';

@Component({
  selector: 'app-register-workshop',
  templateUrl: './register-workshop.component.html',
  styleUrls: ['./register-workshop.component.css']
})
export class RegisterWorkshopComponent implements OnInit {

  constructor(private service:WorkshopService, private formbuilder:FormBuilder, private router:Router) { }

  pushdata={};
  pass:FormGroup;
  // event = new EvtRegisterClas();

  ngOnInit(): void {
    this.displayevt();
    this.pass = this.formbuilder.group({
      name:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      title:['',[Validators.required]],
      study:['',[Validators.required]],
      address:['',[Validators.required]],
    });
  }
  get name(){
    return this.pass.get('name');
  }
  get email(){
    return this.pass.get('email');
  }
  get title(){
    return this.pass.get('title');
  }
  get study(){
    return this.pass.get('study');
  }
  get address(){
    return this.pass.get('address');
  }
  displayevt(){
    this.service.getevent().subscribe(data => this.pushdata = data)
  }

  submitdata(pass:any){
    console.log(pass.controls);
    let data = pass.value;
    this.createdata(data);
  }
  createdata(admin:EvtRegisterClas){
  return this.service.evtregister(admin).subscribe( result => {
    alert("your registration success fully")
    this.router.navigate(['/']);
  });
  }
}
