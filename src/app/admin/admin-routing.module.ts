import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { DeactivateGuard } from '../guard/deactivate.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditSliderComponent } from './edit-slider/edit-slider.component';



const routes: Routes = [
  {path:'', component:AdminComponent,canDeactivate: [DeactivateGuard],
  // canActivateChild:[ActivatechildGuard],
  children:[
    { path:'', component:DashboardComponent,pathMatch:'full', redirectTo:'dashboard' },
    { path:'dashboard', component:DashboardComponent },
    { path:'Add-workshop', component:AddWorkshopComponent},
    { path:'Add-workshop', component:AddWorkshopComponent},
    { path:'registerWorkshopData', component:DisplayRegisterWorkshopComponent },
    { path:'contectData', component:ContectMessageComponent },
    { path:'addadmin', component:AddAdminComponent },
    { path:'changePass', component:ChangePassComponent },
    { path:'profile', component:ProfileComponent },

    { path:'addslider', component:AddsliderComponent,
    children:[
      { path:'editslider/:id', component:EditSliderComponent }
    ]},

    { path:'displayadmin', component:DisplayAdminsComponent,
    children:[
      { path:'editadmin/:id', component:EditAdminComponent }
    ]},
    { path:'displayWorkshop', component:DisplayTotalWorkshopComponent,
    children:[
      { path:'editworkshop/:id', component:EditworkshopComponent }
    ]},
    
  ] },
 
 
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
