import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions, PreloadingStrategy } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

import { CustomloadingService } from './services/customloading.service';
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},

  {path:'admin',  loadChildren:()=> import('./admin/admin.module').then(m=> m.AdminModule)
},

  {path:'home', loadChildren:()=> import('./home/home.module').then(m=> m.HomeModule)
  // , data :{preload : true}
},

  {path:"home",component:HomeComponent},

  // Wild card router
  {path:"**",component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, 
    // {
    //   PreloadingStrategy : CustomloadingService
    // }
    )],
  exports: [RouterModule],
  providers : []
})
export class AppRoutingModule { }
