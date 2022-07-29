import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {
  changepass:FormGroup;
  id = "1";
  changep:any = {};

  constructor(private formbuilder:FormBuilder,private Activerouter:ActivatedRoute,private services:AdminService,private router:Router ) { }

  ngOnInit(): void {
    this.services.getadmindWithId(localStorage.getItem('loginid')).subscribe(data => this.changep = data);

    this.changepass = this.formbuilder.group({
      psw:['',[Validators.required]],
      newpass:['',[Validators.required]]
    });
  }
get psw(){
  return this.changepass.get('psw');
}
get newpass(){
  return this.changepass.get('newpass');
}
customvar;
  logindata(pass){
    this.services.Updateadmindata(localStorage.getItem('loginid'),this.changep).subscribe(data => {
      this.router.navigate(['admin/displayadmin'])
      this.customvar =  data;
  });
    console.log(pass.value);
  }
}
