import { Component, OnInit } from '@angular/core';
import { AdminRegister } from 'src/app/interfaceClass/admin-register';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UpcomingEvtSerService } from 'src/app/services/upcoming-evt-ser.service';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  signupform:FormGroup;
  data : any = "";
  imgset : any = "";
  constructor(private formbuilder:FormBuilder , private services:AdminService, private router:Router,private http:HttpClient) {


   }
  ngOnInit(): void {
    this.signupform = this.formbuilder.group({  
      fullname:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(30)]),
      username:new FormControl('',[Validators.required]),
      psw:new FormControl(null,[Validators.required]),
      conformpass: new FormControl(null,[Validators.required]),
      gender:new FormControl('',Validators.required),
      mobileno:new FormControl('',Validators.required),
      address:new FormControl('',Validators.required),
      imgpath:new FormControl('',Validators.required)
    },{
      validators :this.MustMatch('psw','conformpass')
    });
    
  }
  get fullname(){    return this.signupform.get('fullname');  }
  get username(){    return this.signupform.get('username');  }
  get psw(){    return this.signupform.get('psw');  }
  get conformpass(){    return this.signupform.get('conformpass');  }
  get gender(){    return this.signupform.get('gender');  }
  get mobileno(){    return this.signupform.get('mobileno');  }
  get address(){    return this.signupform.get('address');  }
  get imgpath(){    return this.signupform.get('imgpath');  }

 
  onselectedFile(){
     this.imgset = this.data.slice(12);
   return this.signupform.controls['imgpath']?.setValue(this.imgset);
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


submitdata(signupform:any){
  console.log(signupform.controls);
  let data = signupform.value;
  
  this.createdata(data);
  
}
customvar;
createdata(admin:AdminRegister){
return this.services.registerdata(admin).subscribe( result => {
  alert("data created sussfully");
  this.customvar = result
});



}



}

