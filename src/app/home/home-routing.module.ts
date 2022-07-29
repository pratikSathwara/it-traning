import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { RegisterWorkshopComponent } from './register-workshop/register-workshop.component';




const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'registerworkshop', component:RegisterWorkshopComponent},
  {path:'login', component:LoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
