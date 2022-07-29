import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminComponent } from '../admin/admin.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate<AdminComponent> {
  canDeactivate(component: AdminComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot | undefined): boolean  {
  
   return window.confirm("are you sure want to logout");
   throw new Error('Method not implemented.');
  }
}
