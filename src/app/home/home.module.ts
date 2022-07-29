import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { ContectComponent } from './contect/contect.component';
import { RegisterWorkshopComponent } from './register-workshop/register-workshop.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [HomeComponent, WorkshopComponent, ContectComponent, RegisterWorkshopComponent, LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
