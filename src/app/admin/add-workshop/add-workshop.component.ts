import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UpcomingEvt } from 'src/app/interfaceclass/upcoming-evt';
import { WorkshopService } from 'src/app/services/workshop.service';

@Component({
  selector: 'app-add-workshop',
  templateUrl: './add-workshop.component.html',
  styleUrls: ['./add-workshop.component.css']
})
export class AddWorkshopComponent implements OnInit {
  passdata:FormGroup;
  data : any = "";
  imgset : any = "";
  constructor(private formbuilder:FormBuilder , private service:WorkshopService, private router:Router) { }

  ngOnInit(): void {
    this.passdata = this.formbuilder.group({
       src: new FormControl('',[Validators.required]),
       title: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(30)]),
      date: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required,Validators.minLength(15),Validators.maxLength(40)])
    });
  }
   get src(){
    return this.passdata.get('selectedFile');
  }
  get title(){
    return this.passdata.get('title');
  }
  get date(){
    return this.passdata.get('date');
  }
  get description(){
    return this.passdata.get('description');
  }
  onselectedFile(){
    this.imgset = this.data.slice(12);
  return this.passdata.controls['src']?.setValue(this.imgset);
 }

submitdata(passdata:any){
  console.log(passdata.controls);
  let data = passdata.value;
  this.createdata(data);
  }
  customvar;
  createdata(passdat:UpcomingEvt){
    this.service.editevt(passdat).subscribe(data =>  {
      this.router.navigate(['/admin/displayWorkshop']);
      this.customvar = data
    });
    }
}
