import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {
  editdata:any = {};
  id = parseInt(this.Activerouter.snapshot.params['id']);
  paddingdata: FormGroup;
  data : any = "";
  imgset : any = "";
 
  constructor(private formbuilder:FormBuilder , private services:AdminService, private Activerouter:ActivatedRoute , private router:Router) { }
  ngOnInit(): void {
    this.services.getadmindWithId(this.id).subscribe(data => this.editdata = data);
    this.paddingdata = this.formbuilder.group({
      fullname:new FormControl('',[Validators.required]),
      username:new FormControl('',[Validators.required]),
      psw:new FormControl(null,[Validators.required]),
      conformpass: new FormControl(null,[Validators.required]),
      gender:new FormControl('',[Validators.required]),
      mobileno:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      address:new FormControl('',[Validators.required,Validators.minLength(15),Validators.maxLength(40)]),
      imgpath:new FormControl(this.imgset,[Validators.required])
    },{
      validators :this.MustMatch('psw','conformpass')
    });
  }


  get imgpath(){return this.paddingdata.get('imgset')}
  get fullname(){return this.paddingdata.get('fullname')}
  get username(){return this.paddingdata.get('username')}
  get psw(){ return this.paddingdata.get('psw')}
  get conformpass(){    return this.paddingdata.get('conformpass');  }
  get gender(){ return this.paddingdata.get('gender')}
  get mobileno(){ return this.paddingdata.get('mobileno')}
  get address(){ return this.paddingdata.get('address')}

  onselectedFile(){
    this.editdata.imgpath = this.editdata.imgpath.substring(12,);
    return this.paddingdata.controls['imgpath']?.setValue(this.editdata.imgpath);
 }

  MustMatch(controlName: string,matchingControlName:string){
    return(formGroup:FormGroup)=>{
      const control = formGroup.controls[controlName];
      const matching = formGroup.controls[matchingControlName];
      if(matching.errors && !matching.errors.MustMatch){
        return 
      }
      if(control.value != matching.value){
        matching.setErrors({MustMatch:true})
      }else{
        matching.setErrors(null);
      }
    }
  }


  change;
  editdatas(){
    this.services.Updateadmindata(this.id, this.editdata).subscribe(data => { 
      this.router.navigate(['admin/displayadmin']);
      alert('data updated sussfully');
      this.change = data
     })

  }
  close(){
    this.router.navigate(['admin/displayadmin']);
  }
 
}
