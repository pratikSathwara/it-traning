import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AddWorkshopComponent } from './add-workshop/add-workshop.component';
import { DisplayRegisterWorkshopComponent } from './display-register-workshop/display-register-workshop.component';
import { ContectMessageComponent } from './contect-message/contect-message.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { DisplayAdminsComponent } from './display-admins/display-admins.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { ProfileComponent } from './profile/profile.component';
import { DisplayTotalWorkshopComponent } from './display-total-workshop/display-total-workshop.component';
import { AddsliderComponent } from './addslider/addslider.component';
import { EditworkshopComponent } from './editworkshop/editworkshop.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MypipePipe } from './mypipe.pipe';
import { EditSliderComponent } from './edit-slider/edit-slider.component';



@NgModule({
  declarations: [AdminComponent, AddWorkshopComponent, DisplayRegisterWorkshopComponent, ContectMessageComponent, AddAdminComponent, DisplayAdminsComponent, EditAdminComponent, ChangePassComponent, ProfileComponent, DisplayTotalWorkshopComponent, AddsliderComponent, EditworkshopComponent, DashboardComponent, MypipePipe, EditSliderComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
