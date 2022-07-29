import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkshopService } from 'src/app/services/workshop.service';

@Component({
  selector: 'app-editworkshop',
  templateUrl: './editworkshop.component.html',
  styleUrls: ['./editworkshop.component.css']
})
export class EditworkshopComponent implements OnInit {
  editdata:any = {};
  id = parseInt(this.Activerouter.snapshot.params['id']);
  passdata: FormGroup;
  // date = new Date('yyyy-MM-dd');
  URL = "./assets/img/pick4.png";
  constructor(private service:WorkshopService, private formbuilder:FormBuilder ,private Activerouter:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.service.displayworkshopid(this.id).subscribe(data => this.editdata = data);

    this.passdata = this.formbuilder.group({
      src: ["",[Validators.required]],
      title: ['',[Validators.required]],
     date: ['',[Validators.required]],
     description: ['',[Validators.required,Validators.minLength(15),Validators.maxLength(30)]]
   });
   this.edit();
  }
  get src(){return this.passdata.get('src')}
  get title(){return this.passdata.get('title')}
  get date(){return this.passdata.get('date')}
  get description(){return this.passdata.get('description')}
  onselectedFile(){
    this.editdata.src = this.editdata.src.substring(12,);
    return this.passdata.controls['src']?.setValue(this.editdata.src);
 }
  edit(){
    this.service.displayworkshopid(this.id).subscribe(data =>{
      this.passdata.controls['src']?.setValue(data.src);
      this.passdata.controls['title']?.setValue(data.title);
      this.passdata.controls['date']?.setValue(data.date);
      this.passdata.controls['description']?.setValue(data.description);
    })
  }


  selectedFile :any;
onFileSelected(event) {
    this.selectedFile = event.target.value;
}
mydata:any = {};
displaytotalWorkshop(){
  this.mydata =  this.service.displayworkshop();
 }
submitdata(paddingdata){
    this.service.UpdateBook(this.id, this.editdata).subscribe(data => { this.router.navigate(['admin/displayWorkshop']) });
    this.displaytotalWorkshop();
    console.log(paddingdata.control);
  }
  close(){
    this.router.navigate(['admin/displayWorkshop']);
  }
}
