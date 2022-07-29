import { Component, OnInit } from '@angular/core';
import { ProfAns } from 'src/app/interfaceclass/prof-ans';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SliderService } from 'src/app/services/slider.service';


@Component({
  selector: 'app-addslider',
  templateUrl: './addslider.component.html',
  styleUrls: ['./addslider.component.css']
})
export class AddsliderComponent implements OnInit {
  data : any = "";
  imgset : any = "";
  dis : any = {};
  book : ProfAns;
  // slider = new ProfAns();
  // slider !: Observable<ProfAns>;
  imgpath = "./assets/img/";
  signupform:FormGroup;
  editdata:any = {};
  constructor(private service:SliderService, private router:Router, private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.signupform = this.formbuilder.group({
      image: ['',[Validators.required]],
      masg: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(30)]],
      name: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]],
      city: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]]
    })
    this.display();
  }
  get image(){
    return this.signupform.get('image');
  }
  get masg(){
    return this.signupform.get('masg');
  }
  get name(){
    return this.signupform.get('name');
  }
  get city(){
    return this.signupform.get('city');
  }

  onselectedFile(){
    this.imgset = this.data.slice(12);
  return this.signupform.controls['image']?.setValue(this.editdata.image);
 }
 
  submitdata(signupform:any){
    if(this.editdata.id == 0){
      let data = signupform.value;
      this.createSlider(data);
      this.signupform.reset();
    }else{
      this.service.editsliderd(this.book.id, this.editdata).subscribe(result => {
        alert('Slider Edited Successfully');
      })
    }
   
   
  }
  customvar;
  createSlider(slider:ProfAns){
   return this.service.addslider(slider).subscribe(data =>{
    alert("slider added");
    this.customvar =  data;
    // this.router.navigate(['/home/login']);
    this.display();
   });
  }
  display(){
    this.service.profAns().subscribe(data =>{
      this.dis = data
    })
  }
  edit(id){
    this.service.editslider(id).subscribe( result => {
      this.editdata = result
    })
  }
  deleteslider(id){
    if( window.confirm("are you sure want to delete data ??   ")){
this.service.deleteslider(id).subscribe(data =>{
  this.customvar = data;
  this.display();
});
    }
  }
}
