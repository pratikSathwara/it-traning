import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pass:FormGroup;
  
 abcd : number;
  constructor(private formbuilder:FormBuilder, private services:AdminService,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.pass = this.formbuilder.group({
      username:new FormControl('',[Validators.required,Validators.email]),
      psw:new FormControl('',[Validators.required])
    })
  }
get username(){  return this.pass.get('username');}
get psw(){  return this.pass.get('psw');}

  logindata(){
   this.services.logindata().subscribe(data =>{
      const user = data.find((a:any)=>{
        return a.username === this.pass.value.username && a.psw === this.pass.value.psw
        
      });
      if(user){
        this.abcd = user.id;
        alert("user login successfull "+ this.abcd) ;
      
      localStorage.setItem('loginid',''+this.abcd);

        this.pass.reset();
        this.router.navigate(['/admin']);
        
      }else{
        alert("Try Again");
        this.router.navigate(['/home/login']);
      }
    })
    // console.log(pass.controls);



  }
 
}

