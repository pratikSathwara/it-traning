import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  editdata:any = {};
  // id = this.Activerouter.snapshot.params['id'];
  id = '/2'
  paddingdata:FormGroup;
  
  constructor(private formbuilder:FormBuilder , private services:AdminService, private Activerouter:ActivatedRoute , private router:Router) { }
  ngOnInit(): void {

    this.services.getadmindWithId(localStorage.getItem('loginid')).subscribe(data => this.editdata = data);

    this.paddingdata = this.formbuilder.group({
      imgpath:['',[Validators.required]],
      fullname:['',[Validators.required]],
      username:['',[Validators.required]],
      psw:['',[Validators.required]],
      gender:['',[Validators.required]],
      mobileno:['',[Validators.required]],
      address:['',[Validators.required,Validators.minLength(15),Validators.maxLength(40)]],
    });
  }
  
  get imgpath(){return this.paddingdata.get('imgpath')}
  get fullname(){return this.paddingdata.get('fullname')}
  get username(){return this.paddingdata.get('username')}
  get psw(){ return this.paddingdata.get('psw')}
  get gender(){ return this.paddingdata.get('gender')}
  get mobileno(){ return this.paddingdata.get('mobileno')}
  get address(){ return this.paddingdata.get('address')}

  onselectedFile(){
    this.editdata.imgpath = this.editdata.imgpath.substring(12,);

    return this.paddingdata.controls['imgpath']?.setValue(this.editdata.imgpath);
 }

  editdatas(paddingdata){
    this.services.Updateadmindata(localStorage.getItem('loginid'), this.editdata).subscribe(data => { this.router.navigate(['admin/displayadmin']) })
 
  }
}
